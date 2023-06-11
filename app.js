import express from "express";
import cors from "cors";
import connectToDb from './utils/db.js'
import { PORT } from "./configs/index.js";
import Router from "./routes/index.js";

const app = express();
connectToDb();

app.use(cors());
app.use(express.json());
app.use("/", Router)
app.listen(PORT, () => {
  console.log(`Server is Up and Running at Port : ${PORT}`);
});
