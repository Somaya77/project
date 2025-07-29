import express from 'express';
import { getAdvice } from '../controllers/advice.controller.js';

const router = express.Router();

router.get('/', getAdvice);

export default router;
