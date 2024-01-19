import express from "express";
const router = express.Router();

//controllers
import { getNotes } from "../controllers/notes.crontroller";

router.get("/", getNotes);

export default router;
