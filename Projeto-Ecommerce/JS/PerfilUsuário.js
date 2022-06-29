let listas = document.getElementsByClassName('lista')

for (let i = 0; i < listas.length; i++) {
    listas[i].addEventListener("mouseover", function () {
        this.classList.add("destaque")
    })

listas[i].addEventListener("mouseleave", function () {
    this.classList.remove("destaque")
})
}

// ALTERAR OS DADOS DO PERFIL (INPUT)//

let edit = document.getElementsByClassName('dadospessoais') 
let alt = document.getElementsByClassName('alterar')
let cancel = document.getElementsByClassName('cancelar')

//BOTÃO ALTERAR//

for (let i = 0; i < alt.length; i++) {
    alt[i].addEventListener('mousedown', function () {
        this.style.background = '#aa013c'

        // LIMPAR INPUT//

        for (let i = 0; i < edit.length; i++) {
            
            for (let i = 0; i < edit.length; i++) {
                edit[i].addEventListener("click", function () {
                    edit[i].removeAttribute('readonly')
                    this.value = ""
                })            
            }
        }    
    
    })
    alt[i].addEventListener('mouseup', function () {
        this.style.background = '#F50057'
    })
    
}

//BOTÃO CANCELAR//

for (let i = 0; i < cancel.length; i++) {
    cancel[i].addEventListener('mousedown', function () {
        this.style.background = '#eedede'
        location.reload()
    })
    cancel[i].addEventListener('mouseup', function () {
        this.style.background = '#ffffff'
    })
}
