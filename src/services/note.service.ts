import Note from "../models/Note";

//arquivo usado para lidar com a manipulação de dados

interface NoteRequestBody {
  title: string;
  description: string;
  color?: string;
  favorite?: boolean;
  // Adicione outras propriedades conforme necessário
}

export const create = (body: NoteRequestBody) => Note.create(body);
