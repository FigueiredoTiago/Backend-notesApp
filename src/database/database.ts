import mongoose, { ConnectOptions } from "mongoose";

const dburl = process.env.DBURL || "mongodb://localhost:27017/mydatabase";

export const connectDatabase = async () => {
  const options: ConnectOptions = { serverSelectionTimeoutMS: 5000 };
  try {
    await mongoose.connect(dburl, options);
    console.log("Conectado ao Banco de dados com Sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};
