import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { characterId } = req.params;

  if (!isValidObjectId(characterId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
