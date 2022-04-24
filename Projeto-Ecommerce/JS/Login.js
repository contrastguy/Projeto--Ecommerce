console.log("Estou funcionando!");

// var a = document.querySelector('a')
// a.addEventListener('mouseenter', entrar)
// a.addEventListener('mouseout', sair)

// function entrar(){
//      a.style.color = 'yellow'
// }

// function sair(){
//      a.style.color = 'green'
// }

function validar(){

    let email = document.getElementById('email')
    let pass = document.getElementById('pass')

    if (email.value.length == 0 || pass.value.length == 0){
        alert('[Error] E-mail ou senha inválidos')
    }else if(email.value === "projetotera@tera.com" && pass.value === "12345"){
        window.location.href = "./PerfilUsuário.html"
    }else{
        alert('[Error] E-mail ou senha inválidos')
    }
}

