const elemento = {
  btnConsulta: document.querySelector("#consulta"),
  msgBemVindo: document.querySelector(".msg-inicio"),
  telaConsulta: document.querySelector("#tela-consulta"),
  busca: document.querySelector("#busca"),
  btnBuscar: document.querySelector("#btn-buscar"),
  resultado: document.querySelector("#resultado"),
};

function esconderBemVindo() {
  elemento.btnConsulta.addEventListener("click", (event) => {
    event.preventDefault();
    elemento.msgBemVindo.classList.toggle("escondido");
    elemento.telaConsulta.classList.toggle("escondido");
  });
}

elemento.btnBuscar.addEventListener("click", () => {
  const termoBusca = elemento.busca.value;
  elemento.resultado.innerHTML = `<p>Resultado para: <strong>${termoBusca}</strong></p>`;
});

esconderBemVindo();

let produtos = [
  {
    id: 1,
    imagem: "./img/bomba_hidraulica1.jpg",
    nome: "KSB Hydrobloc AP/MF",
    preco: "500",
    descricao:
      " Bomba compacta para água limpa ou turva, ideal para abastecimento, irrigação e uso industrial/predial.",
  },
  {
    id: 2,
    imagem: "./img/bomba_hidraulica2.png",
    nome: "Bomba Hidráulica de Pistão Axial",
    preco: "200",
    descricao:
      "Alta pressão e engenharia de precisão, com bom rendimento volumétrico e operação contínua em condições severas.",
  },
  {
    id: 3,
    imagem: "./img/bomba_hidraulica3.jpg",
    nome: " Bomba Hidráulica de Engrenagens Externas",
    preco: "600",
    descricao:
      "Ótimo custo-benefício para sistemas de média e alta pressão, durável e com baixa manutenção.",
  },
];

function buscarBomba() {
  let idDigitado = document.getElementById("idBusca").value;
  let bombaEncontrada;

  if (isNaN(idDigitado)) {
    bombaEncontrada = produtos.find(
      (u) => u.nome.toLowerCase() == idDigitado.toLowerCase(),
    );
  } else {
    bombaEncontrada = produtos.find((u) => u.id == idDigitado);
  }

  if (bombaEncontrada) {
    document.getElementById("imagem").innerHTML =
      `<img src="${bombaEncontrada.imagem}" width="200px" height="200px">`;
    document.getElementById("nome").innerHTML = `Nome: ${bombaEncontrada.nome}`;
    document.getElementById("preco").innerHTML =
      `Preço: R$ ${bombaEncontrada.preco} `;
    document.getElementById("descricao").innerHTML =
      `Descrição: ${bombaEncontrada.descricao}`;
  } else {
    document.getElementById("imagem").innerHTML =
      `<img src="./img/bomba_bomba.webp" width="200px" height="200px">`;
    document.getElementById("nome").innerHTML = "BOMBA!";
    document.getElementById("preco").innerHTML = "NOT FOUND";
    document.getElementById("descricao").innerHTML = "CABUMMMMMMMM!!!!!!";
    tocarAudio();
  }
}

function tocarAudio() {
  const audio1 = document.getElementById("olhaBomba");
  audio1.play();
}
