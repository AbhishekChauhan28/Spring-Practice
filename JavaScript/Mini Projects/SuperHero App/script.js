const SUPERHERO_TOKEN = 2221058968089669
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.powerstats)
            const superHero = json
            showHeroInfo(superHero)
        })
}

const statToEmoji ={
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`

    const img = `<image src = "${character.image.url}" height = 200px width = 200px>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]}
        ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join(' ')

    heroImageDiv.innerHTML = `${name}${img}${stats}`
}

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            showHeroInfo(hero)
        })
}

searchButton.onclick = () => getSearchSuperHero(searchInput.value)


const randomHero = () => {
    const numberOfHeroes = 536
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())