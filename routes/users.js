const express = require("express");
const router = express.Router();

//Listar todos os usuarios
router.get("/", (req, res) => {
    res.json([{id: 1, nome: "Ana"}, {id: 2, nome: "Carlos"}]);
});

//Buscar usuario por ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({id, nome: "Usuario Exemplo"});
});

//Criar novo usuario
router.post("/", (req,res) => {
    const novoUsuario = req.body;
    res.status(201).json({
        mensagem: "Usuario criado com sucesso",
        usuario: novoUsuario
    });
});

//Atualizar usuario por ID
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    res.json({
        mensagem: 'Usuario ${id} atualizado',
        dados: dadosAtualizados
    });
});

//Excluir usuario
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: 'usuario ${id} deletado'});
});

module.exports = router;
