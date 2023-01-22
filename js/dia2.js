let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual é a sua idade?")
let linguagemProgramacao = prompt("Qual linguagem de programação você está estudando?")
let estudoProgramacao = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`)
let resposta = prompt("Digite 1 ou 2")

if (estudoProgramacao == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso!")
} else {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`)