let listas = document.getElementsByClassName('lista')

for (let i = 0; i < listas.length; i++) {
    listas[i].addEventListener("mouseover", function () {
        this.classList.add("destaque")
    })

listas[i].addEventListener("mouseleave", function () {
    this.classList.remove("destaque")
})
}
