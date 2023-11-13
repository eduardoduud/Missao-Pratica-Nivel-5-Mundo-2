const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LivroSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
});

const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro;
