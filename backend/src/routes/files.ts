import { Router } from 'express';
import { uploadFile } from '../controllers/files';
import { uploadMiddleware } from '../middlwares/middleware';

const router = Router();

router.post('/upload', uploadMiddleware, uploadFile);

export default router;
