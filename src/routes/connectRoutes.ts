import { Router } from 'express';
import { connectSlack, connectDiscord, connectTelegram } from '../controllers/connectController';

const router = Router();

router.post('/slack', connectSlack);
router.post('/discord', connectDiscord);
router.post('/telegram', connectTelegram);

export default router;
