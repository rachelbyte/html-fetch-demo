//grab access to body element
//const body = document.querySelector("body");

let cards = document.querySelector(".cards")
async function fetchPokemon() {
  //saving the api response in a constant
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  let variable = data["results"]

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
    
  

   
  } 

     // body.append(cards) 
 }

//  function filter () {

//  let input = document.getElementById("myInput");
//   let f = input.value.toUpperCase();
//   let p = cards.getElementsByTagName("p")[0]
//   text = p.textContent || p.innerText

//   for (let i = 0; i < cards.length; i++) {

//   if (cards[i].)

//   }

//  }


// function addClass (element, name) {

//   element.classList.add(name)




// // }

// // function removeClass (element, name) {

// //   element.classList.remove(name)


// }

fetchPokemon();
