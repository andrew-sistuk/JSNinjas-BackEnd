import { charactersCollection } from '../db/models/characters.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllCharacters = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const charactersQuery = charactersCollection.find();

  const [charactersCount, characters] = await Promise.all([
    charactersCollection.find().merge(charactersQuery).countDocuments(),
    charactersQuery.skip(skip).limit(limit).exec(),
  ]);
  const paginationData = calculatePaginationData(
    charactersCount,
    page,
    perPage,
  );

  return {
    data: characters,
    ...paginationData,
  };
};

export const getCharacterByID = async (id) => {
  return charactersCollection.findById(id);
};

export const createCharacter = async (payload) => {
  return charactersCollection.create(payload);
};

export const upsertCharacter = async (filter, payload, options = {}) => {
  const rawCharacter = await charactersCollection.findOneAndUpdate(
    filter,
    payload,
    {new: true, includeResultMetadata: true,  ...options },
  );

  if (!rawCharacter || !rawCharacter.value) return null;

  return {
    character: rawCharacter.value,
    isNew: Boolean(rawCharacter?.lastErrorObject?.upserted),
  };
};

export const deleteCharacter = async (id) => {
  return charactersCollection.findOneAndDelete({ _id: id });
};
