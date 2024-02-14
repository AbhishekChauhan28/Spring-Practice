console.log('hello')

let title = document.getElementById('title')

// console.log(title)
console.log('Before: ', title.innerText)

title.innerText = 'Good by my friend'

console.log('after: ', title.innerText)


// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// redDiv.onclick = () => {
//     console.log('User Choose: red')
// }
// yellowDiv.onclick = () => {
//     console.log('User Choose: yellow')
// }
// greenDiv.onclick = () => {
//     console.log('User Choose: green')
// }

const squares = document.querySelectorAll('.colorSquare')
console.log(squares)

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
        console.log(square.value)
    }
})

function clearScores(){
    squares.forEach(square => square.innerText = '')
}

const ClearGameDiv = document.getElementById('clearGame')
ClearGameDiv.onclick = () => clearScores()

