function contar() {
    var inicio = Number(document.querySelector('#nbInicio').value)
    var fim = Number(document.querySelector('#nbFim').value)
    var passo = Number(document.querySelector('#nbPasso').value)
    var divRes = document.querySelector('#div_res')
    if (passo <= 0) {
        window.alert('Passo inválido, usando 1 no lugar.')
        passo = 1
    }
    divRes.innerHTML = `<p>Escrevendo sequencia de ${inicio} até ${fim} com passo de ${passo}.</p>`
    var texto = ''
    if (inicio < fim) {
        for (var i = inicio; i <= fim; i += passo) {
            texto += i + '\u{1F449}'
        }
    } else {
        for (var i = inicio; i >= fim; i -= passo) {
            texto += i + '\u{1F449}'
        }
    }
    texto += '\u{1f3c1}'
    p = document.createElement('p')
    p.innerText = texto
    divRes.appendChild(p)
}