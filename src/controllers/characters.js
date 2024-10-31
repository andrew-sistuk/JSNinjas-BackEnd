import { getAllEvents, getEventByID } from '../services/characters.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getAllEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  // console.log('-------------------------', req.query);

  const characters = await getAllEvents({
    page,
    perPage,
  });
  res.json({
    status: 200,
    message: 'Successfully found characters!',
    data: characters,
  });
};

export const getEventByIDController = async (req, res, _next) => {
  const { eventId } = req.params;

  const event = await getEventByID(eventId);

  if (!event) {
    throw createHttpError(404, 'Character not found');
  }

  res.json({
    status: 200,
    message: `Successfully found event with id ${eventId}!`,
    data: event,
  });
};
