const url = "http://localhost:1313/root/";



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

    //lembrar que para fazer a chamada da API , tem que ser dentro de uma função
    fetch(url)
    .then( (response) => {
        response.json()
        .then( (data) => {
            console.log(data)
        } )    
    } )

}
