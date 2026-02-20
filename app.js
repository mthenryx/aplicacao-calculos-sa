const readline = require("readline")
const funcoes = require("./modelo/funções.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o primeiro valor da conta: ", function (primeiroValor) {
    let numero1 = primeiroValor

    entradaDeDados.question("Digite o segundo valor do calculo: ", function (segundoValor) {
        let numero2 = segundoValor

        entradaDeDados.question("Digite qual operação deseja realizar: ", function (tipoDeCalculo) {
            let operacao = tipoDeCalculo

            numero1 = funcoes.transformaEmPonto(numero1)
            numero2 = funcoes.transformaEmPonto(numero2)

            let validar = funcoes.validarResultados(numero1, numero2, operacao)

            if (validar == false) {
                console.log("ERRO: Olhe o que você digitou, confira se está tudo certo")
            } else {
                let resultado = funcoes.calcularOperacao(numero1, numero2, operacao)

                console.log("**********************************************")
                console.log("O resultado do calculo é: " + resultado)
                console.log("**********************************************")
            }
        })
    })
})