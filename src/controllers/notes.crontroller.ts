import { Request, Response } from "express";
//services
import { create, getAll } from "../services/note.service";

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

export const createNote = async (req: Request, res: Response) => {
  try {
    let { title, description, color, favorite } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .send({ message: "Escreva algo na nota antes de criar..." });
    }

    // Verifica se color não foi fornecido ou é uma string vazia
    if (color === undefined || color.trim() === "") {
      // Atribui valor padrão se for undefined ou string vazia
      color = "#FFFFFF";
    }

    // Verifica se favorite não foi fornecido
    if (favorite === undefined) {
      // Atribui valor padrão se for undefined
      favorite = false;
    }

    const note = await create(req.body);

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
