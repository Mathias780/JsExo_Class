const buttonColor = document.querySelector("#colorButton")
const cubeBackground = document.querySelector(".cube-first")

buttonColor.addEventListener ('click' ,() => {
    cubeBackground.style.backgroundColor = "red"
})

// 2 ème carré
const buttonSurvol = document.querySelector('#buttonFlight')
const cubeSurvol = document.querySelector('.cube-second')

buttonSurvol.addEventListener('click', () => {
    let widthCube = 150
    let heightCube = 150
    let marginCube = 35
    cubeSurvol.style.width = widthCube + "px"
    cubeSurvol.style.height = heightCube + "px"
    cubeSurvol.style.margin = marginCube + "px"
})

// 3 ème carré 
const buttonPosition = document.querySelector('#buttonPosition')
const cubePosition = document.querySelector('.cube-third')

buttonPosition.addEventListener('click', () => {
    cubePosition.style.position = "absolute"
    cubePosition.style.left = "100px"
    cubePosition.style.right = "75px"
    
})

