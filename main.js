var div = document.createElement("div");
div.innerHTML = 'Hello World'

div.addEventListener('mouseover', () => {
    div.classList.add('color')
})

div.addEventListener('mouseleave', () => {
    div.classList.remove('color')
})

div.addEventListener('mouseover', () =>{
    div.classList.add('font')
})

div.addEventListener('mouseleave', () =>{
    div.classList.remove('font')
})

document.body.appendChild(div);