function acessar() {

    var emaill = document.getElementById('em')
    var emailz = String(emaill.value)

    var senhaa = document. getElementById('sen')
    var senhaz = String(senhaa.value)

    if(emaill.value.length == 0 || senhaa.value.length == 0){
        window.alert('[ERRO] E-mail ou senha inválidos!')
    } else{
        window.alert('Login realizado com sucesso!')
    }

}