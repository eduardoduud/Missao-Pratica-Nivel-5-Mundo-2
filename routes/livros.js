const express = require("express");
const router = express.Router();
const livroDAO = require("../modelo/livro-dao");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const livros = await livroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    console.error("Erro ao obter livros:", error);
    res.status(500).json({ mensagem: "Erro ao obter livros." });
  }
});

router.post("/", async (req, res) => {
  const novoLivro = req.body;

  try {
    const livroIncluido = await livroDAO.incluir(novoLivro);
    res.json({ mensagem: "Livro incluído com sucesso.", livro: livroIncluido });
  } catch (error) {
    console.error("Erro ao incluir livro:", error);
    res.status(500).json({ mensagem: "Erro ao incluir livro." });
  }
});

router.delete("/:_id", async (req, res) => {
  const codigoLivro = req.params._id;

  try {
    const resultadoExclusao = await livroDAO.excluir(codigoLivro);
    if (resultadoExclusao.deletedCount > 0) {
      res.json({ mensagem: "Livro excluído com sucesso." });
    } else {
      res.status(404).json({ mensagem: "Livro não encontrado." });
    }
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
    res.status(500).json({ mensagem: "Erro ao excluir livro." });
  }
});

module.exports = router;
