console.log("Estou funcionando!");

let carrinho =[];

function inscrever(){
    alert("Você se inscreveu!");
}


function comprar(){
    alert("Redirecionando para o carrinho!")
    window.location.href ="https://github.com/contrastguy/Projeto--Ecommerce/blob/main/Projeto-Ecommerce/Home.html"
}

let addCarrinho = document.getElementById("addcarrinho");
function addcarrinho(){
    alert("Produto adicionado ao carrinho!");
    do {
        carrinho.push("Produto")
    } while (onclick in addCarrinho);
    
}
console.log(carrinho);



function botaocurtir(){
    alert("Você curtiu o Produto!");
}