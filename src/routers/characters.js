import { Router } from 'express';
import {
  createCharacterController,
  deleteCharacterController,
  getAllCharactersController,
  getCharacterByIDController,
  patchCharacterController,
} from '../controllers/characters.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createCharacterSchema, updateCharacterSchema } from '../validation/characters.js';

const router = Router();

router.get('/characters', ctrlWrapper(getAllCharactersController));

router.get('/characters/:characterId', ctrlWrapper(getCharacterByIDController));

router.post('/characters', validateBody(createCharacterSchema), ctrlWrapper(createCharacterController));

router.patch('/characters/:characterId', validateBody(updateCharacterSchema), ctrlWrapper(patchCharacterController));

router.delete(
  '/characters/:characterId',
  ctrlWrapper(deleteCharacterController),
);

export default router;
