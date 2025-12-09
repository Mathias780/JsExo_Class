const body = document.querySelector('#body')
const buttonModify = document.querySelector('#darkmodeButton')


buttonModify.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    buttonModify.style.color = "White"
    buttonModify.style.borderColor = "white"
    buttonModify.style.backgroundColor = "black"
})