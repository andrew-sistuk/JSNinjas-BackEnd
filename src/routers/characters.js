import { Router } from 'express';
import {
  getAllEventsController,
  getEventByIDController,
} from '../controllers/characters.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/characters', ctrlWrapper(getAllEventsController));

router.get('/characters/:eventId', ctrlWrapper(getEventByIDController));

export default router;
