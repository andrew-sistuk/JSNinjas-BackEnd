import {
  createCharacter,
  deleteCharacter, deleteCharacterImg,
  getAllCharacters,
  getCharacterByID,
  upsertCharacter,
} from '../services/characters.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';

export const getAllCharactersController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const characters = await getAllCharacters({
    page,
    perPage,
  });

  res.json({
    status: 200,
    message: 'Successfully found characters!',
    data: characters,
  });
};

export const getCharacterByIDController = async (req, res, _next) => {
  const { characterId } = req.params;

  console.log(characterId);

  const character = await getCharacterByID(characterId);

  if (!character) {
    throw createHttpError(404, 'Character not found');
  }

  res.json({
    status: 200,
    message: `Successfully found character with id ${characterId}!`,
    data: character,
  });
};

export const createCharacterController = async (req, res) => {
  const photos = req.files;

  let photoUrls = [] ;

  if (photos && photos.length > 0) {
    for (const file of photos) {
      const photoUrl = await saveFileToUploadDir(file);
      photoUrls.push(photoUrl);
    }
  }

  const character = await createCharacter( {
    ...req.body,
    images: photoUrls,
  });

  res.status(201).json({
    status: 201,
    message: `Successfully created a character!`,
    data: character,
  });
};

export const patchCharacterController = async (req, res, next) => {
  const { characterId } = req.params;

  const photos = req.files;
  const item = await getCharacterByID(characterId);

  if (!item) {
    next(createHttpError(404, 'Character not found'));
    return;
  }

  let photoUrls = item.images ? item.images : [] ;

  if (photos && photos.length > 0) {
    for (const file of photos) {
      const photoUrl = await saveFileToUploadDir(file);
      photoUrls.push(photoUrl);
    }
  }

  const result = await upsertCharacter({ _id: characterId }, {
    ...req.body,
    images: photoUrls,
  });

  res.status(200).json({
    status: 200,
    message: `Successfully patched a character!`,
    data: result,
  });
};

export const deleteCharacterController = async (req, res, next) => {
  const { characterId } = req.params;

  const character = await deleteCharacter(characterId);

  if (!character) {
    next(createHttpError(404, 'Character not found'));
    return;
  }

  res.status(204).send();
};

// тут насправді мало б бути оновлення))
export const deleteCharacterImageController = async (req, res, next) => {
  const { characterId, img } = req.params;

  const character = await deleteCharacterImg(characterId, img);

  if (!character) {
    next(createHttpError(404, 'Character not found'));
    return;
  }

  res.status(204).send();
};
