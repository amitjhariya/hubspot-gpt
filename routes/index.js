import express from "express";
import chatRouter from './chat.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "success"
  });
});

router.get("/test", (req, res) => {
  res.send(`<h2>Test Success</h2>`);
});

router.use("/api/v1/chat", chatRouter);


export default router;