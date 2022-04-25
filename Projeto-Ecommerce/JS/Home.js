

const dataBase = [
    {
        id: 1,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    {
        id: 2,
        product: "Calça Teste 2",
        amount: 199.90,
        type: "winter"
        
    },
    {
        id: 3,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    {
        id: 4,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    {
        id: 5,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    {
        id: 6,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    {
        id: 7,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    {
        id: 8,
        product: "Camisa Teste",
        amount: 59.90,
        type: "summer"

    },
    
]

let summer = dataBase.filter(function(dataBase){
    return dataBase.type === "summer"
})

console.log(summer)





const cards = {
    addCards(dataBase){
        for(let i = 0; i < dataBase.length; i++){
            cards.filter(dataBase)
        }
    },

    filter (dataBase) {
        let ul = document.querySelector("#cardsContainer ul")
        let li = document.createElement("li")
        li.innerHTML = ` 
            <div class="img-container">
                <a href="#">
                    <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                    class="product-image"
                    alt="Imagem do Produto"> <div class="price-tag"><h3>R$ 88,88 - Produto 1</h3></div> 
                </a>
            </div>`
        ul.appendChild(li)

    },


}

cards.addCards(dataBase)