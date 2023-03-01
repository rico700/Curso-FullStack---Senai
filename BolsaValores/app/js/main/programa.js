import { NegociacaoController } from "../controllers/negociacaoController.js";

const botao = document.querySelector("#btnAdd");
const botaoExcluir = document.querySelector("#btnExcluir");
const controller = new NegociacaoController();

botao.addEventListener("click", () => {
  event.preventDefault();
  controller.criarNegociacao();
});

function excluirLinha(id) {
  controller.excluirNegociacao(id);
}
