import express from "express";
const router = express.Router();

//controllers
import { getNotes, createNote } from "../controllers/notes.crontroller";

//rota para pegar todas as notas
router.get("/", getNotes);

//rota para criar uma nova nota

router.post("/", createNote);

export default router;
