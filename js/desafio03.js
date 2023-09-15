function calcularAnoNascimento() {
    let idade = parseInt(document.getElementById("idade").value);
    let anoAtual = new Date().getFullYear();
    let anoNascimento = anoAtual - idade;
    document.getElementById("resultado").textContent = `Você nasceu em ${anoNascimento}.`;
}