const mongoose = require("mongoose");

const banco = mongoose.createConnection("mongodb://localhost:27017/livraria");

module.exports = banco;

module.exports.conexaoPronta = new Promise((resolve, reject) => {
  banco.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    resolve();
  });

  banco.on("error", (error) => {
    console.error("Erro na conexão com o banco de dados:", error);
    reject(error);
  });
});
