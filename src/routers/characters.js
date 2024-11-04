import { Router } from 'express';
import {
  createCharacterController,
  deleteCharacterController, deleteCharacterImageController,
  getAllCharactersController,
  getCharacterByIDController,
  patchCharacterController,
} from '../controllers/characters.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createCharacterSchema, updateCharacterSchema } from '../validation/characters.js';
import { isValidId } from '../middlewares/isValidId.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.get('/characters', ctrlWrapper(getAllCharactersController));

router.get('/characters/:characterId', isValidId, ctrlWrapper(getCharacterByIDController));

router.post('/characters', upload.array('images', 10), validateBody(createCharacterSchema), ctrlWrapper(createCharacterController));

router.patch('/characters/:characterId', isValidId, upload.array('images', 10), validateBody(updateCharacterSchema), ctrlWrapper(patchCharacterController));

router.delete(
  '/characters/:characterId',
  ctrlWrapper(deleteCharacterController),
);

router.delete(
  '/characters/img/:characterId/:img',
  ctrlWrapper(deleteCharacterImageController),
);

export default router;
