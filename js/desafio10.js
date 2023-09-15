function calcularTabuada() {
    let numero = parseInt(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada");

    // Limpar a tabela da tabuada
    tabuada.innerHTML = "";

    // Criar cabeçalho da tabela
    let cabecalho = document.createElement("tr");
    cabecalho.innerHTML = "<th>Operação</th><th>Resultado</th>";
    tabuada.appendChild(cabecalho);

    // Calcular e adicionar as linhas da tabuada
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        let linha = document.createElement("tr");
        linha.innerHTML = `<td>${numero} x ${i}</td><td>${resultado}</td>`;
        tabuada.appendChild(linha);
    }
}