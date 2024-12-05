let num = 0

const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const counter = document.querySelector('#counter')

const changeColor = (color) => {
    counter.innerText = num
    counter.style.color = color
}

const increment = () => {
    num++
    changeColor('green')
}

const decrement = () => {
    if (num > 0) {
        num--
        changeColor('red')
    }
}

incrementButton.onclick = () => increment()
decrementButton.onclick = () => decrement()