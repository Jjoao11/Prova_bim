const express = require("express");

const routes = express.Router();
const ProductsController = require("../controller/ProductsController")

routes.get("/", (req, res) => res.send("<h1>Hello World</h1>"));

routes.get("/listar", ProductsController.listartodos);                                                                                                                               

routes.get("/listar/:id", ProductsController.listar1);

routes.post("/postar", ProductsController.postar);

routes.put("/atualizar", ProductsController.atualizar);

routes.delete("/deletar", ProductsController.deletar);
module.exports = routes;