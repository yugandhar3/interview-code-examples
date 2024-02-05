document.querySelector("#categaries").addEventListener("click", function (e) {
    console.log(e.target.id)
})

document.querySelector("#from").addEventListener("keyup", function (e) {
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase()
    }
})