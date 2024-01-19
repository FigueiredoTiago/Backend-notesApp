//middleware utilizado para validar o ID das Notas.
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

export const validateNoteId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID inválido!!!" });
  }

  next();
};
