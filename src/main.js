import {tarjetas,filtrarTipos,buscarPorNombre,abcOrder} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const todos = {
  pokemon: [
    ...data.pokemon
  ]

}

//const pokemonDB = data.pokemon
//OrdenarPorNombre,OrdenarPorNombreAZ,
// demostracion de datos de pokemon.js a main.js
// console.log("pokemonDB =")
// console.log(pokemonDB)
// console.log(Imagenes)
// console.log(data);
//const btn = document.getElementById("btn");
//const dataContainer = document.getElementById("dataContainer");
//const tipos=document.querySelector(".tipos");
//const menuTipos=document.querySelector(".menu-tipos")

const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data)
const tipoPokemon=document.getElementsByClassName("tipoPokemon")
const inputBuscar = document.getElementById("inputBuscar")
const Ordenar = document.getElementsByClassName("Ordenar")

for (const tipo of tipoPokemon) {
  tipo.addEventListener("click", () => {
    const pokemonesTipo = filtrarTipos(data, tipo.name)
    bloqueTarjetas.innerHTML = tarjetas(pokemonesTipo)
  })
}

inputBuscar.addEventListener('input', () => { 
  //console.log(inputBuscar.value)
  const FiltroNombre = buscarPorNombre(data, inputBuscar.value)
  bloqueTarjetas.innerHTML = tarjetas(FiltroNombre)
});
// inputBuscar.addEventListener('input', () => {
//   console.log(inputBuscar.value)
//   const FiltroNombre = buscarPorNombre1(data, inputBuscar.value)
//   bloqueTarjetas.innerHTML = tarjetas(FiltroNombre)
// });

for (const item of Ordenar) {
  item.addEventListener("click", () => {
    if (item.name === "todos") {
      bloqueTarjetas.innerHTML = tarjetas(todos);
    }
    
    if (item.name === "AZ") {
      const SortData = abcOrder (data, item.name)
      bloqueTarjetas.innerHTML = tarjetas(SortData)
    }
    else if (item.name === "ZA") {
      const SortData = abcOrder (data, item.name)
      bloqueTarjetas.innerHTML = tarjetas(SortData)
    }
  })
}

const tipo= data.pokemon.reduce((acumulador, tipos) => {
  if (tipos.type === 'psychic') {
    return acumulador + 1
    
  } else {
    return acumulador
  }
}, 1)

console.log(tipo)