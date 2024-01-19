import express from "express";
const router = express.Router();

//controllers
import { getNotes, createNote, getNoteById } from "../controllers/notes.crontroller";

//rota para pegar todas as notas
router.get("/", getNotes);

//Rota para pegar uma nota pelo id
router.get("/:id", getNoteById);

//rota para criar uma nova nota
router.post("/", createNote);

export default router;
