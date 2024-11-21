// exibir mensagem de confirmação ao clicar no botão de compra
var buttons = document.querySelectorAll(".btn-buy");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // desabilita o botão e muda a cor
    this.disabled = true;
    this.style.backgroundColor = "#888";

    // cria a mensagem de sucesso
    var message = document.createElement("p");
    message.textContent = "Compra realizada com sucesso!";
    message.style.color = "green"; // cor verde para sucesso
    this.parentElement.appendChild(message);

    // remove a mensagem após 5 segundos
    setTimeout(function () {
      message.style.display = "none";
    }, 5000);
  });
}

// verificação do formulário de contato
var form = document.querySelector("form");
var nameInput = document.querySelector("#nome");
var emailInput = document.querySelector("#email");
var messageInput = document.querySelector("#mensagem");
var submitButton = form.querySelector("button");

// função de validação de email simples
function isValidEmail(email) {
  return email.includes("@"); // verifica se o email tem um "@"
}

// habilitar/desabilitar o botão de envio
function checkForm() {
  if (nameInput.value && emailInput.value && messageInput.value) {
    submitButton.disabled = false; // habilita o botão se todos os campos estiverem preenchidos
  } else {
    submitButton.disabled = true; // desabilita o botão se algum campo estiver vazio
  }
}

// verifica os campos enquanto o usuário digita
nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
messageInput.addEventListener("input", checkForm);

// envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o envio do formulário

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  alert("Mensagem enviada com sucesso!"); // mensagem de sucesso
  form.reset(); // limpa o formulário
  submitButton.disabled = true; // desabilita o botão após o envio
});
