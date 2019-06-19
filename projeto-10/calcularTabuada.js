function calcularTabuada() {
    var txtNum = document.getElementById('num');
    if (txtNum.value.length == 0) {
        window.alert('Por favor, digite o número para calcular a tabuada.');
        return;
    }
    var num = Number(txtNum.value)
    var div = document.getElementById('res')
    div.innerHTML = ''
    for(var i = 0; i <= 10; i++) {
        p = document.createElement('p')
        p.innerHTML = `${num} x ${i} = ${num*i}`
        div.appendChild(p)
    }
}
