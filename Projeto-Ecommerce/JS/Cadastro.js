let inp = document.getElementsByClassName("input")

for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener("click", function () {
        this.value = ""
    })
}