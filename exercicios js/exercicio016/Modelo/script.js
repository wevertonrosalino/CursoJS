function calcular() {
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} ✅ ` 
            }  
            res.innerHTML += `🧐` 
        } else {
            // Contagem descrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ✅ `
            }
            res.innerHTML += `🧐`
        }
    }
}