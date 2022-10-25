//grab access to body element
const body = document.querySelector("body");

async function fetchPokemon() {
  //saving the api response in a constant
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data = await response.json();
  const p = document.createElement("p");
  p.innerHTML = data.name;
  body.appendChild(p);
}

fetchPokemon();

//Callback example for success/error handling
// function funcName(successCallback, errorCallback) {
//   let num = 1 + 2;
//   if (num === 2) {
//     successCallback("Success");
//   } else {
//     errorCallback("Failed");
//   }
// }

//funcName takes 2 args, success callback and error callback, both will console.log the str

//Promise version of funcName
// function funcName() {
//   let num = 1 + 1;
//   //return a debt that we will fulfill
//   return new Promise((resolve, reject) => {
//     if (num === 2) {
//       resolve("Success");
//     } else {
//       reject("Failed");
//     }
//   });
// }

// funcName()
//   .then((response) => {
//     console.log(response);
//     console.log("More Stuff");
//   })
//   .catch((error) => console.log(error));
