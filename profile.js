function favColor(e){
    e.preventDefault()
    alert("My favorite color is green!")
}

let colorBtn = document.querySelector("#color")
colorBtn.addEventListener("click", favColor)

function favPlace(e){
    e.preventDefault()
    alert("My favorite place is Montana")
}

let placeBtn = document.querySelector("#place")
placeBtn.addEventListener("click", favPlace)

function favRitual(e){
    e.preventDefault()
    alert("My favorite ritual is watching Pacific Rim with a big ol' burrito")
}

let ritBtn = document.querySelector("#ritual")
ritBtn.addEventListener("click", favRitual)

function submit(e){
    e.preventDefault()
    alert("Success!")
}

let subBtn = document.querySelector("#submit-button")
subBtn.addEventListener("click", submit)