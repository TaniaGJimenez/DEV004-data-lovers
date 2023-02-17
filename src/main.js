import {tarjetas,filtrarTipos,buscarPorNombre,OrdenarPorNombre,OrdenarPorNombreAZ} from './data.js';
import data from './data/pokemon/pokemon.js';

//const pokemonDB = data.pokemon

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
    
    
    if (item.name === "AZ") {
      const SortData = OrdenarPorNombreAZ (data, item.name)
      bloqueTarjetas.innerHTML = tarjetas(SortData)
    }
    else if (item.name === "ZA") {
      const SortData = OrdenarPorNombre (data, item.name)
      bloqueTarjetas.innerHTML = tarjetas(SortData)
    }
  })
}
