const form = document.querySelector("form");
const botaoTema = document.querySelector(".tema-btn");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Agendamento realizado com sucesso! 💖");
    form.reset();
});

function trocarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
}