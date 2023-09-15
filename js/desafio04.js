function calcularSoma() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let soma = numero1 + numero2;
    document.getElementById("resultado").textContent = `A soma de ${numero1} + ${numero2} é = ${soma}.`;

}