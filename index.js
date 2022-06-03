console.log('Construindo uma Pokedex')

const div = document.createElement('div')
div.innerHTML = 'Criando uma Pokedex'
console.log(div)

const page = document.querySelector('#pokedex-page')
/*page.innerHTML += div*/
page.appendChild(div)

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => {
  	    return response.json()
    })
    .then(async data => {
  	    const box = document.querySelector('#pokemon-box')
  	    page.innerHTML = ''
  
        for(let i = 0; i < data.results.length; i++) {
            box.querySelector('#pokemon-name').innerHTML = data.results[i].name
            box.querySelector('#pokemon-name').style.textTransform = 'capitalize'
            box.querySelector('#pokemon-name').style.color = "#660066"
            box.querySelector('#pokemon-name').style.fontStyle = "bold"
            box.querySelector('#pokemon-name').style.fontSize = "24"

            const pokemonType = await fetch ('https://pokeapi.co/api/v2/pokemon/' + data.results[i].name)
            const type = await pokemonType.json()
            box.querySelector('#pokemon-type').innerHTML = 'type:' + type.types[0].type.name
            box.querySelector('#pokemon-type').style.color = "#9494b8"
            box.querySelector('#pokemon-type').style.fontStyle = "oblique"
            box.querySelector('#pokemon-type').style.fontSize = "16"

            const pokemonSpecie = await fetch ('https://pokeapi.co/api/v2/pokemon/' + data.results[i].name)
            const specie = await pokemonSpecie.json()
            box.querySelector('#pokemon-specie').innerHTML = 'specie:' + type.types[0].type.name
            box.querySelector('#pokemon-specie').style.color = "#9494b8"
            box.querySelector('#pokemon-specie').style.fontStyle = "oblique"
            box.querySelector('#pokemon-specie').style.fontSize = "16"

            const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const image = await pokemonImage.json()
            box.querySelector('#pokemon-img').src = image.sprites.front_default

            page.innerHTML += box.outerHTML
        }
    })
 