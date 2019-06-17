function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    horaatual = data.getHours()
    msg.innerHTML = `Agora são ${horaatual} horas.`
    if (0 < horaatual && horaatual < 12) {
        img.src = "img/manha-1.jpg"
        document.body.style.background = "#FDCA93"
    } else if (horaatual <= 18) {
        img.src = "img/tarde-1.jpg"
        document.body.style.background = "#8F9FB6"
    } else {
        img.src = "img/noite-1.jpg"
        document.body.style.background = "#082642"
    }
}
