//Choose a random color
const button = document.querySelector('button')
const body2 = document.querySelector('body')
const colors = ['red', 'green', 'green', 'green', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body2.style.backgroundColor = colors[colorIndex]
}