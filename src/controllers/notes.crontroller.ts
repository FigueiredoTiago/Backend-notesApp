import { Request, Response } from "express";
import mongoose from "mongoose";
import { NoteRequestBody } from "../interfaces/note.interface";

//services
import {
  create,
  getAll,
  getById,
  updateById,
  getByTitle,
  deleteById,
  getFavorites,
} from "../services/note.service";

//controller usado para buscar todas as notas
export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await getAll();

    if (notes.length === 0) {
      return res.status(404).send({ message: "Nada Por aqui ainda..." });
    }

    res.status(200).send({ notes });
  } catch (error) {
    console.error("Erro ao listar as notas:", error);
    res.status(500).send({ message: "Erro ao listar as notas." });
  }
};

// controller usado para buscar uma nota pelo id
export const getNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const note = await getById(id);

    if (!note) {
      return res.status(404).send({ message: "Nota não encontrada." });
    }

    res.status(200).send({ note });
  } catch (error) {
    console.error("Erro ao buscar a nota:", error);
    res.status(500).send({ message: "Erro ao buscar a nota." });
  }
};

//controller usado para criar uma nova nota
export const createNote = async (req: Request, res: Response) => {
  try {
    let { title, description, color, favorite } = req.body as NoteRequestBody;

    if (!title || !description) {
      return res
        .status(400)
        .send({ message: "Escreva algo na nota antes de criar..." });
    }

    // Verifica se color não foi fornecido ou é uma string vazia
    if (color === undefined || color.trim() === "") {
      // Atribui valor padrão se for undefined ou string vazia
      color = "#858b98";
    }

    // Verifica se favorite não foi fornecido
    if (favorite === undefined) {
      // Atribui valor padrão se for undefined
      favorite = false;
    }

    const note = await create({ title, description, color, favorite });

    res.status(200).send({
      message: "Nota criada com sucesso!",
      note: {
        id: note._id,
        title,
        description,
        color,
        favorite,
      },
    });
  } catch (error) {
    console.error("Erro ao criar a nota:", error);
    res.status(500).send({ message: "Erro ao criar a nota." });
  }
};

//controller usado para atualizar uma nota pelo id
export const updateNote = async (req: Request, res: Response) => {
  try {
    let { title, description, color, favorite } = req.body as NoteRequestBody;

    if (!title && !description && !color && favorite === undefined) {
      return res
        .status(400)
        .send({ message: "Escreva algo na nota antes de editar..." });
    }

    const { id } = req.params;

    const note = await getById(id);

    if (!note) {
      return res.status(404).send({ message: "Nota não encontrada." });
    }

    const noteUpdated = await updateById(
      id,
      title,
      description,
      color as string,
      favorite as boolean,
    );

    res.status(200).send({
      message: "Nota atualizada com sucesso!",
      note: noteUpdated,
    });
  } catch (error) {
    console.error("Erro ao criar a nota:", error);
    res.status(500).send({ message: "Erro ao criar a nota." });
  }
};

//controller usado para buscar uma nota pelo titulo
export const getNoteByTitle = async (req: Request, res: Response) => {
  const { title } = req.query;

  try {
    const notes = await getByTitle(title as string);

    if (notes.results.length === 0) {
      return res.status(404).send({ message: "Nenhum resultado encontrado." });
    }

    return res.send(notes);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

//controller usado para deletar uma nota pelo id

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const note = await getById(id);

    if (!note) {
      return res.status(404).send({ message: "Nota não encontrada." });
    }

    await deleteById(id);

    res.status(200).send({ message: "Nota deletada com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar a nota:", error);
    res.status(500).send({ message: "Erro ao deletar a nota." });
  }
};

//controller usado para buscar notas apenas que o campo favorite seja true
export const findFavorites = async (req: Request, res: Response) => {
  try {
    const notes = await getFavorites();

    res.status(200).send({ notes });
  } catch (error) {
    console.error("Erro ao listar as notas:", error);
    res.status(500).send({ message: "Erro ao listar as notas." });
  }
};
