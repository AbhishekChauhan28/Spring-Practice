// console.log('Hello World');

//-------------------------------------------------------------------------------------------------------

// name = 'Joe Doe'
// console.log(name);

//---------------------------------------------------------------------------------------------------------

// User Input

// food = Number(prompt('how much was the food'));
// tipPercentage = Number(prompt('tip %') / 100);
// tipAmount = food * tipPercentage;

// total = food + tipAmount;

// console.log("Total Amount: ", total);
// console.log("Tip Amount: ", tipAmount);

//---------------------------------------------------------------------------------------------------------

// --> Baby Weather application

// let Weather = prompt('Whats the weather ?')

// if (Weather == 'rain') {
//     console.log('Grab your umbrella ☂️')
// }
// else{
//     console.log('Wear Sunglasses 🕶️')
// }

//---------------------------------------------------------------------------------------------------------

// ---> Functions

// function sayMyName(name) {
//     console.log(name)
// }
// // This is you TELLING your computer what to do
// sayMyName('Qazi')
// // What would this function print out?
// sayMyName('Lance')
  
// // BONUS: How come these two funct ion calls print two different names if they are both called sayMyName?
  
// // Remember this function?
// function sum(a,b) {
//     return a+b
// }
  
// let result = sum(9,10)
//   // What would this print out? How does "return" work in the function?
// console.log(result)

// function greeting(name){
//     greet = `hi ${name},  Nice to meey you!`
//     console.log(greet)
// }

// greeting('Abhishek')


// function calculateFoodTotal(food, tip){
//     tipPercentage = tip  / 100;
//     tipAmount = food * tipPercentage;
//     total = sum(food , tipAmount);

//     return total
// }
// console.log(calculateFoodTotal(100,20))

// //ES6 
// //Arrow Function

// const sumArrow = (a,b) => a + b

// console.log(sumArrow(10,20))

//---------------------------------------------------------------------------------------------------------

// --> Arrays

//const groceries = ['banana', 'apple', 'orange', 'pineapple']

// --> Objects
// const person = {
//     name: 'Abhishek',
//     shirt: 'white',
// }

// console.log(person.name);
// console.log(person.shirt)

// const introducer = (name, shirt, Assests, Liabilities) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         Assests: Assests,
//         Liabilities: Liabilities,
//         netWorth: function(){
//             return this.Assests - this.Liabilities
//         }
//     }
//     const intro = `Hi me name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.netWorth()}`

//     return intro
// }

// console.log(introducer('Abhishek', 'Black', 5000000, 250000))

//---------------------------------------------------------------------------------------------------------

// --> Loops

// const grocerie = ['banana', 'apple', 'orange', 'pineapple']

// for(let i = 0; i < groceries.length; i++){
//     console.log(i, groceries[i])
// }

// for(const groceries of grocerie){
//     console.log(groceries)
// }

// Double the number -->

// const double = (numbers) => {
//     let result = []
//     for(const number of numbers){
//         result.push(number ** 2)
//     }
    
//     return result    
// }

// console.log(double([1,2,4,5,6,7,24,546,24,345]))



// const numbers = [1,2,4,5,6,7,24,546,24,345]
// let result = []
// for(const number of numbers){
//     result.push(number * 2)
// }

// console.log(result)

// Length of the phrase -->

// const letterCounter = (phrase) => {
    
//     let result = 0;

//     for(const index in phrase) {
//         console.log(Number(index) + 1)
//         result = Number(index) + 1
//     }

//     return{result: result} 
// }

// const phrase = prompt('Write Your phrase')

// console.log(letterCounter())

// Sum of Array -->
// Write a for loop that loops through all the numbers inside the array

// const sumArray = (numbers) => {
//     let result = 0;

//     for(const number of numbers) {
//         result = result + number
//     }

//     return {result}
// }

// const nums = [1, 2, 3, 4, 5]
// sumArray(nums)

// max of arrays -->

// const max = (numbers) => {
//     const result = numbers[0]

//     for(const number of numbers){
//         if(number > result) {
//             result = number
//         }
//     }

//     return { result }
// }
// console.log(max([1,2,3,4,5,6,7,8,12,43,53,2,5,100,64,22,33]))

// fequency of arrays -->

// const letterFrequency = (phrase) => {
//     console.log(phrase)

//     let frequency = {}
//     for(const letter of phrase){
//         console.log(letter)

//         if(letter in frequency){
//             frequency[letter] +=  1
//         }
//         else{
//             frequency[letter] = 1
//         }
//     }
//     return frequency
// }
 
// console.log(letterFrequency('lol, what are you doing buddy'))

// // Word frequency -->

// const wordFrequency = (phrase) => {
//     let frequency = {}

//     words = phrase.split(' ')
//     console.log(words)

//     for(const word of words){
//         console.log(word)

//         if( word in frequency){
//             frequency[word] += 1
//         }
//         else{
//             frequency[word] = 1
//         }
//     }

//     return frequency
// }

// const userInput = prompt('Write your phrase')
// console.log(wordFrequency(userInput))


// map() function -->

// const doubleMap = (Number) => {
//     number = Number.split(' ')
//     return number.map(number => number *2)
// }
// const userInput = prompt('Write your number')
// console.log(doubleMap(userInput))

// filter() function -->

// const filter = (numbers, greaterThan) => {
//     let result = []

//     for(const number of numbers){
//         if(number > greaterThan){
//             result.push(number)
//         }
//     }
//     return result
// }

// //console.log(filter([1, 2, 3, 4, 5, 6], 2))

// const num = [12,3,45,6,75,44,6,23]
// console.log(num.filter(num => num > 3))


// const actors = [
//     {name: 'Johnny', netWorth: 20000000},
//     {name: 'Amber', netWorth: 20000},
//     {name: 'SRK', netWorth: 2000000},
//     {name: 'RDJ', netWorth: 30000000},
//     {name: 'killian', netWorth: 2000000},
// ]
// let result = actors.filter(actors => actors.netWorth > 1500000)
// console.log(result)

// let names = result.map(actors => actors.name).join(',')
// playGround.innerHTML = `<h1>${names}</h1>`

// reduce() function -->

// function sum(a,b){
//     return a + b
// }

// const nums = [1,2,3]
// // const result = nums.reduce((prev, curr) => prev + curr)
// const result = nums.reduce(sum)

// console.log(result)

//---------------------------------------------------------------------------------------------------------

//Asynchronous Programming

// your order tomato soup
//Meanwhile you continue your convo with a friend
//Resolved - your server brings you soup
//Rejected - No soup today

// const waitingForSoup = () => console.log('1')
// console.log("2")
// //start a request
// //timeout is like a threadblocking means it will stop us in doing other things
// setTimeout(waitingForSoup,2000) //2000 ms is 2s
// console .log('3')

//Dealing with the realtime data as am API so will return us the data as a promise.

// Promise :-----

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         isReady = [true, false][Math.floor(Math.random() * 2)]
//         isReady ? resolve('Soup is ready'): reject('No soup today')
//     }, 2000 )
// })

// console.log(
//     promise1
//     .then(success => console.log({success}))
//     .catch(error => console.log({error}))
// )

// console.log('fetch :', fetch('https://dog.ceo/api/breeds/image/random') //promise
// .then(response => response.json()) //promise
// .then(data => console.log(data))
// )

//New Syntax as per ES6 : -
// Async Await :----
//await : It is same as .then and response something
// Rules for using async/await: 
// 1. You must create a funct()
// 2. You must use the keyword async
// 3. Use the word await


// const getDog = async() => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const fetchResponse = await fetch(url)
//     const data = await fetchResponse.json()
//     console.log(data)
// }

// getDog()


//Resolved -  if waiter brings the soup
// tip the waiter
// you pay for soup

// Rejected - leave a bad review, no tip 

// const getSoup = async() => {
//     const data = {rating: 0, tip: 0, pay: 0, review: 0}
//     try {
//         const soup = await promise1
//         console.log(soup)
//         data.rating = 5
//         data.tip = .2
//         data.pay = 10
//         data.review = 'Nice Service'
//         return data
//     } catch(error) {
//         console.log(error)
//         data.rating = 0
//         data.tip = 0
//         data.pay = 0
//         data.review = 'Bad Service'
//         return data
//     }
// }
// getSoup().then(value => console.log(value))

// Note :-- If we are doing console.log and in return we are getting a promise{} only then 
//there are only two ways to extact the value from it. ::
// 1. Do "await" in this we have to wrap the funct() which is async
// ex: console.log(await getSoup())
// 2. do .then on the value
// ex: console.log(getSoup().then(value => console.log(value))) 

//---------------------------------------------------------------------------------------------------------

// Classes :--
// this keyWord :--

class car{
    constructor(name, color, topSpeed){
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0;
    }
    // getters and setters
    getCurrentSpeed() {
        return currentSpeed
    }
    zeroToSixty() {
        setTimeout(() => {
            console.log('Awww!, this is fast!')
            this.currentSpeed = 60;
            console.log(this.currentSpeed)
        })
    }
    drive(speed = 10) {
        console.log('Just drove 2 miles')
        this.currentSpeed += speed
        console.log(`driving speed a at ${this.currentSpeed} mph`)
    }
    break() {
        this.currentSpeed -= 10
    }
    stop() {
        console.log('Coming to a screeching halt!')
        this.currentSpeed = 0
    }
}

const ferrari = new car('ferrari', 'red', 250)
console.log(ferrari.name)
console.log(ferrari.color)
console.log(ferrari.topSpeed)
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
console.log(ferrari.currentSpeed)
ferrari.break()
ferrari.stop()
console.log(ferrari.currentSpeed)

const porsche = new car('ferrari', 'red', 250)
console.log(porsche.name)
console.log(porsche.color)
console.log(porsche.topSpeed)
porsche.drive(40)
// const nums = [1,2,3,4,5]
// nums.forEach(_ => porsche.drive())
porsche.zeroToSixty()
porsche.stop()
porsche.currentSpeed
console.log(porsche.currentSpeed)
// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.topSpeed)

// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.break()

// console.log(ferrari.currentSpeed)
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty()

const numbers = [1,2,3]
numbers.push(4)   // Is .push() a method
console.log(numbers)