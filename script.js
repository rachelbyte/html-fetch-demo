//grab access to body element
const body = document.querySelector("body");
// const fetch = require("isomorphic-fetch")

async function fetchPokemon() {
  //saving the api response in a constant
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  let variable = data["results"]
 
  let cards = document.querySelector(".cards")

 

  for (let i = 0; i < variable.length; i++) {

    let card = document.createElement("div")
    card.classList.add("card")
    p = document.createElement("p");
    let name = variable[i]["name"]
    name = name.charAt(0).toUpperCase() + name.slice(1)
    p.innerText = name 
    let img = document.createElement("img")
    img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`)
    card.append(p)
    card.append(img)
    cards.append(card)

    let graph = card.getElementsByTagName("p")[0]

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    if (graph.innerText.toUpperCase().indexOf(filter) > -1) {

    card.style.display = "block"

    } else {

      card.style.display = "none"

    }
    
    


  }
     // body.append(cards) 
 }




fetchPokemon();
