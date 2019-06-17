function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
        } else {
            genero = 'mulher'
        }
        res.innerHTML = `Detectado: ${genero} com ${idade} anos.`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (idade < 10) {
            // criança
            if (genero == 'mulher') {
                img.setAttribute('src', 'img/mulher-crianca.jpg')
            } else {
                img.setAttribute('src', 'img/homem-crianca.jpg')
            }
        } else if (idade < 18) {
            // adolecente
            if (genero == 'mulher') {
                img.setAttribute('src', 'img/mulher-adolecente.jpg')
            } else {
                img.setAttribute('src', 'img/homem-adolecente.jpg')
            }
        } else if (idade < 40) {
            // jovem
            if (genero == 'mulher') {
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            } else {
                img.setAttribute('src', 'img/homem-jovem.jpg')
            }
        } else if (idade < 50) {
            //maduro
            if (genero == 'mulher') {
                img.setAttribute('src', 'img/mulher-madura.jpg')
            } else {
                img.setAttribute('src', 'img/homem-maduro.jpg')
            }
        } else {
            // idoso
            if (genero == 'mulher') {
                img.setAttribute('src', 'img/mulher-idosa.jpg')
            } else {
                img.setAttribute('src', 'img/homem-idoso.jpg')
            }
        }
        res.appendChild(img)
    }
}