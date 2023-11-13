const Livro = require("./livro-schema");

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.error("Erro ao obter livros:", error);
    throw error;
  }
};

const incluir = async (livro) => {
  try {
    console.log("Objeto novoLivro:", livro);
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    console.error("Erro ao incluir livro:", error);
    throw error;
  }
};

const excluir = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado;
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
    throw error;
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
