    /*if (n1.value.length == '') {
        alert('[ERRO] Por favor digite um número!')
    } else {      
        for (let c = cont; cont <= 10; c += cont ) {

        }
    }*/
    function calcular() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
        
    if (num.value.length == '') {
            alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // Outras linguagens fazem uso 
            tab.appendChild(item)
            c++
        }
    }
} 

