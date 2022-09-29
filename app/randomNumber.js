const menorValor = 1
const maiorValor = 1000
const randomNumber = geraRandomNumber()


function geraRandomNumber () {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

//Função para apertar o digito 0 e aparecer o número no console
document.body.addEventListener('keypress', function (event) {
    const code = event.code
    if (code == "Digit0") {
        console.log('Não conte isso para ninguém:')
        console.log(`O número secreto é ${randomNumber}  :)`)
    }
});