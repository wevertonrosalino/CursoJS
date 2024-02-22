function insert(num) {
    var numero = document.querySelector('p.resultado').innerHTML
    document.querySelector('p.resultado').innerHTML = numero + num
}
function clean() {
    document.querySelector('p.resultado').innerHTML = ''
}
function back() {
    var resultado = document.querySelector('p.resultado').innerHTML;
    document.querySelector('p.resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular() {
    var resultado = document.querySelector('p.resultado').innerHTML;
    if (resultado) {
        document.querySelector('p.resultado').innerHTML = eval(resultado)
    } else {
        document.querySelector('p.resultado').innerHTML = 'tem nada fi'
    }
}