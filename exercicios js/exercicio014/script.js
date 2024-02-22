function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#DEC38E'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = 'fototarde.jpg'
        document.body.style.background = '#F7B287'
    } else {
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#131729'
    }
}
