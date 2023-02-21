import { tarjetas, filtrarTipos, buscarPorNombre, abcOrder } from "./data.js";

import data from "./data/pokemon/pokemon.js";

const todos = {
  pokemon: [...data.pokemon],
};

//import pokemon from './data/pokemon/pokemon.js';
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
bloqueTarjetas.innerHTML = tarjetas(data);
const tipoPokemon = document.getElementsByClassName("tipoPokemon");
const inputBuscar = document.getElementById("inputBuscar");
const Ordenar = document.getElementsByClassName("Ordenar");
const grafica = document.getElementById("grafica");

for (const tipo of tipoPokemon) {
  tipo.addEventListener("click", () => {
    if (tipo.name === "todos") {
      bloqueTarjetas.innerHTML = tarjetas(todos);
    } else {
      const pokemonesTipo = filtrarTipos(data, tipo.name);
      bloqueTarjetas.innerHTML = tarjetas(pokemonesTipo);
    }
  });
}

inputBuscar.addEventListener("input", () => {
  //console.log(inputBuscar.value)
  const FiltroNombre = buscarPorNombre(data, inputBuscar.value);
  bloqueTarjetas.innerHTML = tarjetas(FiltroNombre);
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
      const SortData = abcOrder(data, item.name);
      bloqueTarjetas.innerHTML = tarjetas(SortData);
    } else if (item.name === "ZA") {
      const SortData = abcOrder(data, item.name);
      bloqueTarjetas.innerHTML = tarjetas(SortData);
    }
  });
}
grafica.addEventListener("click", () => {
  const arrayTypes = [
    "psychic",
    "ground",
    "water",
    "fighting",
    "normal",
    "ghost",
    "grass",
    "poison",
    "flying",
    "dark",
    "fairy",
    "dragon",
    "rock",
    "steel",
    "ice",
    "electric",
  ];
  const arrayTotalTypes = [];

  for (let index = 0; index < arrayTypes.length; index++) {
    console.log(filtrarTipos(data, arrayTypes[index]).pokemon.length);
    //objTotalTypes.arrayTypes[index] = filtrarTipos(data,arrayTypes[index]).pokemon.length
    arrayTotalTypes.push({
      type: arrayTypes[index],
      total: filtrarTipos(data, arrayTypes[index]).pokemon.length,
    });
  }
  console.log(arrayTotalTypes);
});
