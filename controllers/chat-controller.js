import Chat from '../models/chat-model.js';
import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({ accessToken: 'pat-na1-824773c4-aad4-45f0-934d-d3ecf27c1a43' });




export const testChat = async (req, res, next) => {
  const chatData = req.body;
  try {
    console.log(chatData)
    const url = 'https://api.hubspot.com/conversations/v3/visitor-identification/tokens/create';
    const data = {
      email: 'gob@bluth.com',
      firstName: 'Gob',
      lastName: 'Bluth'
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer pat-na1-824773c4-aad4-45f0-934d-d3ecf27c1a43`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    // const data = await fetch('/oauth/v2/private-apps/get/access-token-info')
    // const data = await Chat.create(chatData);
    res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};

