const menorValor = 1
const maiorValor = 1000

function randomNumber () {
    const numero = parseInt(Math.random() * maiorValor + 1)
    return numero
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor