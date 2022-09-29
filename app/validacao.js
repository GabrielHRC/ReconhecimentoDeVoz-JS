function verificaChute(chute) {
    const numero = +chute

    if (valorValido(numero)) {
        elementoChute.innerHTML += '<div>O valor não é um número</div>'
        return
    }

    if (numeroNaoPermitido(numero)) {
        elementoChute.innerHTML += `<div>O valor secreto está entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === randomNumber) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${randomNumber}<h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > randomNumber) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function valorValido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})