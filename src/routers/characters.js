import { Router } from 'express';
import {
  createCharacterController,
  deleteCharacterController,
  getAllCharactersController,
  getCharacterByIDController,
  patchCharacterController,
} from '../controllers/characters.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/characters', ctrlWrapper(getAllCharactersController));

router.get('/characters/:characterId', ctrlWrapper(getCharacterByIDController));

router.post('/characters', ctrlWrapper(createCharacterController));

router.patch('/characters/:characterId', ctrlWrapper(patchCharacterController));

router.delete(
  '/characters/:characterId',
  ctrlWrapper(deleteCharacterController),
);

export default router;
