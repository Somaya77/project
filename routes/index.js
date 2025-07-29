import express from 'express';
import adviceRoutes from './advice.routes.js';
import itemsRoutes from './items.routes.js';

const router = express.Router();

router.use('/advice', adviceRoutes);
router.use('/items', itemsRoutes);

export default router;
