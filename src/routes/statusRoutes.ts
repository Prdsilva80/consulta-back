// statusRoutes.ts
import express from 'express';
import { getStatus } from '../controllers/statusController';

const router = express.Router();

router.get('/:orderNumber', getStatus);

export default router;
