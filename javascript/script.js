//Ativar links do sistema//
const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLinks);
//Ativar itens do orçamento//
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
  console.log(elemento);
}
parametros.forEach(ativarProduto);
// Parte 2 - perguntas

const perguntas = document.querySelectorAll(".art-per button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");
  console.log(ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
// Galeria de imagens //
const Galeria = document.querySelectorAll(".principal-div img");
const Galeriacont = document.querySelector(".principal-div");
function TrocarImagens(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  console.log(media);
  if (media) {
    Galeriacont.prepend(img);
  }
}
function eventosGaleria(img) {
  img.addEventListener("click", TrocarImagens);
}
Galeria.forEach(eventosGaleria);
if (window.SimpleAnime) {
  new SimpleAnime();
}
