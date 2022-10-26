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

 function filter () {

  let input = document.getElementById("myInput");
  let f = input.value.toUpperCase();
  for (i = 0; i < cards.length; i++) {
    let a = cards[i].getElementsByTagName("p");
    let txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(f) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }

 }

//  function filter (c) {
//   let input = document.getElementById("myInput");
//   //let f = input.value.toUpperCase();
//   if (c == "all") c = "";
//   for (i = 0; i < cards.length; i++) {
//     let a = cards[i].getElementsByTagName("p")[0];
//     let txtValue = a.textContent || a.innerText;
//     removeClass(cards[i], "show");
//     if (cards[i].className.indexOf(c)> -1) addClass(cards[i], "show");
//   }

//  }


// function addClass (element, name) {

//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }

// }

// function removeClass (element, name) {

//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");

// }

// filter("all")

fetchPokemon();
