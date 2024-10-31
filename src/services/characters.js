import { charactersCollection } from '../db/models/characters.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllEvents = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const charactersQuery = charactersCollection.find();

  const [charactersCount, characters] = await Promise.all([
    charactersCollection.find().merge(charactersQuery).countDocuments(),
    charactersQuery.skip(skip).limit(limit).exec(),
  ]);
  const paginationData = calculatePaginationData(charactersCount, page, perPage);
  // const charactersQuery = charactersCollection.find();
  // const charactersCount = await charactersCollection
  //   .find()
  //   .merge(charactersQuery)
  //   .countDocuments();
  //
  // const characters = await charactersQuery.skip(skip).limit(limit).exec();
  //
  // const paginationData = calculatePaginationData(charactersCount, perPage, page);

  return {
    data: characters,
    ...paginationData,
  };
};

export const getEventByID = async (id) => {
  return charactersCollection.findById(id);
};
