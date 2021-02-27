import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json()); // Necessário para o servidor o formato JSON. Formato TS JSON não é padrão.
app.use(router);
/* //GET => Buscar Info
//POST => Salvar Info
//PUT => Alterar Info
//DELETE => Deletar
//PATCH => Alteração específica

//http://localhost:3000/users
app.get("/", (req, res) => {
  //return res.send("Nudes")
  return res.json({ message: "Hello World" });
});

// 1 param => Rota(Recurso API)
// 2 param => req, res

app.post("/", (req, res) => {
  // Recebeu dados para serem salvos
  return res.json({ message: "Os dados foram salvos com sucesso!" });
  // "post" não coloca em json na página web
}); */

app.listen(3000, () => console.log("Servidor rodando."));
