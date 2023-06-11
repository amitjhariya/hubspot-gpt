import { Schema, model } from "mongoose";

const chatSchema = new Schema({
  username: { 
    type: String,
    required: true,
     },
  message: { 
    type: String,
    required: true,
     },
  status: { 
    type: String,
     },
  createdAt: { 
    type: Date
     },
});

const Chat = model('Chat', chatSchema);
export default Chat;
