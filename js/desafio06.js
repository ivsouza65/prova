function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    // Usando if
    if (numero > 0) {
        resultado.textContent = "O número é positivo.";
    } else if (numero < 0) {
        resultado.textContent = "O número é negativo.";
    } else {
        resultado.textContent = "O número é zero.";
    }
}