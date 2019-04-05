const charCard = (props) => {
    const {name,species,origin,image} = props
    const {name:planet} = origin
    return (
        `<div>
            <div>
                <img src=${image}></img>
            </div>
            <div>
                <h4>Name: ${name}</h4>
                <h5>Specie: ${species}</h5>
                <h6>Origin: ${planet}</h6>
            </div>
        </div>`
    )
}
const getFirstTwentyCharacters = async (baseUrl,from,to) => {
    const fromTo = Array.from({length: to - from + 1}, (_,index) => index + 1).join(',')
    const url = `${baseUrl}/character/${fromTo}`
    console.log(url)
    const response = await fetch(url)
    const characters = await response.json()
    return characters
}
const getCharactersByName = async (baseUrl, name) => {
    const url = `${baseUrl}/character/?name=${name}`
    console.log(url)
    const response = await fetch(url)
    const {results: characters} = await response.json()
    return characters
}
const appendElements = (characters, empty) => {
    const grid = document.querySelector('.grid')
    if(empty === true) {
        grid.innerHTML = null
    }
    characters.forEach(character => {
        grid.innerHTML += charCard(character)
    });

}
const main = async () => {
    const baseUrl = 'https://rickandmortyapi.com/api'
    const firstTwentyCharacters = await getFirstTwentyCharacters(baseUrl,1,20)
    appendElements(firstTwentyCharacters)

    const form = document.querySelector('form')
    const input = document.querySelector('input')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
            
        const query = input.value
        const charactersByName = await getCharactersByName(baseUrl, query)

        appendElements(charactersByName, true)
    })
    
    
}
main()

