function cadastrar() {

    var n = document.getElementById('nome')
    var nn = String(n.value)

    var cpf = document.getElementById('cpf')
    var cpft = Number.parseInt(cpf.value)

    if (cpf.value.length != 11 || cpf.value.length <= 0) {

        window.alert("Informe um CPF válido!")
        document.getElementById('cpf').value = ""

    } else {

        var email = document.getElementById('email')
        var emailt = String(email.value)

        var senha = document.getElementById('senha')
        var senhat = String(senha.value)

        window.alert(`Cadastro concluído com sucesso, ${nn}!`)

    }

}