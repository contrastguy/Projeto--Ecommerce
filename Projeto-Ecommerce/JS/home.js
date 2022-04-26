

const dataBase = [
    {
        id: 1,
        name: "Camisa 1",
        price: 59.90,
        type: "summer"

    },
    {
        id: 2,
        name: "Camisa 2",
        price: 49.90,
        type: "winter"
        
    },
    {
        id: 3,
        name: "Camisa 3",
        price: 35.90,
        type: "summer"

    },
    {
        id: 4,
        name: "Camisa 4",
        price: 59.90,
        type: "summer"

    },
    {
        id: 5,
        name: "Camisa 5",
        price: 29.90,
        type: "summer"

    },
    {
        id: 6,
        name: "Camisa 6",
        price: 49.90,
        type: "summer"

    },
    {
        id: 7,
        name: "Camisa 7",
        price: 19.90,
        type: "summer"

    },
    {
        id: 8,
        name: "Camisa 8",
        price: 50.90,
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
            cards.filter(dataBase, i)
        }
    },

    filter (dataBase, index) {
        let ul = document.querySelector("#cardsContainer ul")
        let li = document.createElement("li")
        li.innerHTML = ` 
            <div class="img-container">
                <a href="#">
                    <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                    class="product-image"
                    alt="Imagem do Produto"> <div class="price-tag"><h3>R$ ${dataBase[index].price.toFixed(2)} - ${dataBase[index].name}</h3></div> 
                </a>
            </div>`
        ul.appendChild(li)

    },


}

cards.addCards(dataBase)
