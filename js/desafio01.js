function cumprimentar(){
    let nome = document.querySelector("#nome").value
    let resposta = document.querySelector("h2")
    resposta.innerHTML = `Olá, ${nome}! Bem-vindo ao programa de cumprimento.`

}