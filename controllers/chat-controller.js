import Chat from '../models/chat-model.js';
import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({ accessToken: 'pat-na1-824773c4-aad4-45f0-934d-d3ecf27c1a43' });




export const testChat = async (req, res, next) => {
  const data = req.body;
  try {
    res.status(201).json({ success: true, data,success:"GPT Success" });
  } catch (error) {
    next(error);
  }
};

