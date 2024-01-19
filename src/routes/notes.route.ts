import express from "express";
const router = express.Router();

//controllers
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  getNoteByTitle,
  deleteNote,
  findFavorites,
} from "../controllers/notes.crontroller";

//middlewares
import { validateNoteId } from "../middlewares/notes.middleware";

//rota para pegar todas as notas
router.get("/", getNotes);

//rota para buscar notas favoritas
router.get("/favorites", findFavorites);

//rota para buscar uma nota pelo titulo
router.get("/search", getNoteByTitle);

//Rota para pegar uma nota pelo id
router.get("/:id", validateNoteId, getNoteById);

//rota para criar uma nova nota
router.post("/", createNote);

//rota para atualizar uma nota pelo id
router.patch("/:id", validateNoteId, updateNote);

//rota para deletar uma nota pelo id
router.delete("/:id", validateNoteId, deleteNote);

export default router;
