//grab access to body element
const body = document.querySelector("body");
// const fetch = require("isomorphic-fetch")

async function fetchPokemon() {
  //saving the api response in a constant
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  let variable = data["results"]
 
  // card.classList.add("card")

  for (let i = 0; i < variable.length; i++) {
    let cards = document.querySelector(".cards")
    let card = document.querySelector(".card")
    let p = document.createElement("p");
    p.innerText = variable[i]["name"] 
    let img = document.createElement("img")
    img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`)
    card.append(p)
    card.append(img)
   cards.append(card)
    // body.append(p)
    // body.append(cards)
    
  }
 
 }

fetchPokemon();
