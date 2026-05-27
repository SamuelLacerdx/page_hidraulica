// LOGIN
const elemento = {
  email: document.querySelector("#email"),
  senha: document.querySelector("#senha"),
  form: document.querySelector("form"),
  button: document.querySelector("button"),
};

const dadosDigitados = {
  email: "",
  senha: "",
};

const loginCorreto = {
  email: "admin@admin",
  senha: "admin",
};

elemento.form.addEventListener("submit", (event) => {
  event.preventDefault();
  getDadosDigitados(elemento.email.value, elemento.senha.value);
  console.log(dadosDigitados);
});

function getDadosDigitados(email, senha) {
  dadosDigitados.email = email;
  dadosDigitados.senha = senha;
  verificarLogin();
}

function verificarLogin() {

  if (
    dadosDigitados.email == loginCorreto.email &&
    dadosDigitados.senha == loginCorreto.senha
  ) {
    alert("Sucesso!!!");

    window.location.href = "acesso.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}