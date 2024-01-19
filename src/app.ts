import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

//Db
import {connectDatabase} from "./database/database";

//rotas
import notesRoutes from "./routes/notes.route";



const app = express();
const PORT = process.env.PORT || 3000;
connectDatabase();

app.use(cors());
app.use(bodyParser.json());

//rotas
app.use("/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});