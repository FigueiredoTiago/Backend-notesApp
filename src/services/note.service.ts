import Note from "../models/Note";
//arquivo usado para lidar com a manipulação de dados

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
