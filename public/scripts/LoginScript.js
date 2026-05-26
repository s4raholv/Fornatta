const container = document.querySelector(".container");
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");

// BOTÕES DE TROCA LOGIN/REGISTRO
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// FORM LOGIN
const loginForm = document.querySelector(".login form");

loginForm.addEventListener("submit", (event) => {
  // IMPEDE RECARREGAR
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // REDIRECIONA PARA HOME
  window.location.href = "/pages/home.html";
});

// FORM REGISTRO
const registerForm = document.querySelector(".register form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (name === "" || email === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Cadastro realizado com sucesso!");

  // REDIRECIONA PARA HOME
  window.location.href = "/index.html";
});
