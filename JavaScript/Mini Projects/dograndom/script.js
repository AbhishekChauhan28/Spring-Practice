console.log('Hello Doggies')
// .then -promises
//asynchronous programming

const dogImageDiv = document.getElementById('dogImage')
const dogbutton = document.getElementById('dogButton')

//stuff for JS don't wait for
//console.log('Run 1st')

//stuff for JS  wait for
const getNewDog = () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json())
    .then(json => {
        dogImageDiv.innerHTML = `<img src = '${json.message}' height = 300 width = 300/>`
    })
}

dogbutton.onclick = () => getNewDog()

//console.log('run 3rd')