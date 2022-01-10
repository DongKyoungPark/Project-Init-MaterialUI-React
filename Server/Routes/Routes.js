import express from 'express';

const router = express.Router();

import { newController } from '../controllers/Controller.js';

router.post('/api', newController);

export default router;
