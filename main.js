var div = document.createElement("div");
div.innerHTML = 'Hello World'

div.addEventListener('mouseover', () => {
    div.classList.add('color')
})

div.addEventListener('mouseleave', () => {
    div.classList.remove('color')
})

document.body.appendChild(div);