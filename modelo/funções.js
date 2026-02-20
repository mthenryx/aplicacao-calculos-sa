const soma = ["somar", "soma", "somando", "adicionar", "adição", "add", "+", "mais"];
const sub = ["subtração", "subtrair", "sub", "menos", "-", "tirar", "remover", "diminuir"];
const div = ["dividir", "divisão", "div", "/", "÷", "separar", "partir"];
const mult = ["multiplicar", "multiplicação", "mult", "*", "x", "vezes"];

function validarResultados(n1, n2, tipoDeCalculo) {
    let numero1 = n1
    let numero2 = n2
    let operacao = String(tipoDeCalculo)

    if (
        numero1 === "" || isNaN(numero1) ||
        numero2 === "" || isNaN(numero2) ||
        operacao === ""
    ) {
        return false
    } else if (
        sub.includes(operacao) || soma.includes(operacao) ||
        mult.includes(operacao) || div.includes(operacao)) {
        return true
    } else {
        return false
    }
}

function transformaEmPonto(numero) {
    let numero1 = String(numero)

    if (typeof numero1 == "string") {
        numero1 = numero1.replace(",", ".")

        return Number(numero1)
    }
}

function calcularOperacao(n1, n2, tipoDeCalculo) {
    let numero1 = Number(n1)
    let numero2 = Number(n2)
    let operacao = String(tipoDeCalculo)
    let resultado

    if (soma.includes(operacao)) {
        resultado = numero1 + numero2
    } else if (sub.includes(operacao)) {
        resultado = numero1 - numero2
    } else if (div.includes(operacao)) {
        if (numero1 == 0 || numero2 == 0) {
            resultado = "Indeterminado"
        } else {
            resultado = numero1 / numero2
        }
    } else {
        resultado = numero1 * numero2
    }

    return resultado
}

module.exports = {
    calcularOperacao,
    validarResultados,
    transformaEmPonto
}