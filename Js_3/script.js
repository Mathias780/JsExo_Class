const bg = document.querySelector('#bg')
const pad = document.querySelector('#pad')
const h = document.querySelector('#h')
const w = document.querySelector('#w')
const radius = document.querySelector('#radius')
const rot = document.querySelector('#rot')
const preview = document.querySelector('#previewTitle')

function slideBar() {
    const a = bg.value
    preview.style.backgroundColor = `rgb(255, ${a}, 255)`

    preview.style.padding = pad.value + 'px'
    preview.style.height = h.value + 'px'
    preview.style.width = w.value + 'px'
    preview.style.borderRadius = radius.value + 'px'
    preview.style.transform = `rotate(${rot.value}deg)`
}

[bg, pad, h, w, radius, rot].forEach(input => {
    input.addEventListener('input', slideBar)
})

slideBar()
