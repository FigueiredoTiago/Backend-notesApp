import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//rotas
import notesRoutes from "./routes/notes.route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//rotas
app.use("/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});