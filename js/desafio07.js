function verificarParOuImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.textContent = `${numero} é um número par.`;
    } else {
        resultado.textContent = `${numero} é um número ímpar.`;
    }
}