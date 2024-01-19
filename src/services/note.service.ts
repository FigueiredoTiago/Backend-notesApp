//arquivo usado para lidar com a manipulação de dados

import Note from "../models/Note";

interface NoteRequestBody {
  title: string;
  description: string;
  color?: string;
  favorite?: boolean;
}

//service de criação de notas
export const create = (body: NoteRequestBody) => Note.create(body);

//service de listagem de todas as notas
export const getAll = () => Note.find();

//service de busca de uma nota pelo id
export const getById = (id: string) => Note.findById(id);

//service de atualização de uma nota pelo id
export const updateById = (
  id: string,
  title: string,
  description: string,
  color: string,
  favorite: boolean
) => Note.findOneAndUpdate({ _id: id }, { title, description, color, favorite });
