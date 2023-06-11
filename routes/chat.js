import express from 'express';
const router = express.Router();
import {testChat} from '../controllers/chat-controller.js'

router.post('/', testChat);

export default router;
