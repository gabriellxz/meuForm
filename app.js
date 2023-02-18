function enviar() {
    let email = document.getElementById('email')
    let senha = document.getElementById('passaword')
    let priNome = document.getElementById('priNome')
    let segNome = document.getElementById('segNome')
    let fieldiset = document.getElementById('fieldset')
    let img = document.getElementById('img1')

    let nome = priNome.value
    
    const pessoa1 = {
        Email: email,
        Senha: senha,
        PrimeiroNome: priNome,
        SegNome: segNome,
    }
    
    fieldiset.innerText = `Seja bem vindo a nossa plataforma, ${nome}. Obrigado pela preferência!`
    img.src = 'img/fundo2.png'
}