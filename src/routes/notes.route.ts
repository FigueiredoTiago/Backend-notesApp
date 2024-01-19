import express from "express";
const router = express.Router();

//controllers
import { getNotes, createNote, getNoteById, updateNote } from "../controllers/notes.crontroller";

//rota para pegar todas as notas
router.get("/", getNotes);

//Rota para pegar uma nota pelo id
router.get("/:id", getNoteById);

//rota para criar uma nova nota
router.post("/", createNote);

//rota para atualizar uma nota pelo id
router.patch("/:id", updateNote);

export default router;
