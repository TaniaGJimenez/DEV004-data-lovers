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
  if (inputBuscar === "") {
    alert("No dejes el campo vacio");
  }
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

const toggleTableBtn = document.getElementById("toggle-table-btn");
const myTable = document.getElementById("my-table");

toggleTableBtn.addEventListener("click", () => {
  myTable.classList.toggle("hidden");

  const table = document.getElementById("tablaDatos");
  table.innerHTML = "";
  for (let i = 0; i < arrayTotalTypes.length; i++) {
    const row = document.createElement("tr");
    const coldName = document.createElement("td");
    coldName.textContent = arrayTotalTypes[i].type;
    row.appendChild(coldName);
    const colTotal = document.createElement("td");
    colTotal.textContent = arrayTotalTypes[i].total;
    row.appendChild(colTotal);

    table.appendChild(row);
  }

  const canvas = document.getElementById("my-chart");
  const ctx = canvas.getContext("2d");

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
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
        "electric"
      ],
      datasets: [
        {
          label: "TOTAL DE POKEON",
          data: [arrayTotalTypes.total],
          backgroundColor: "blue",
          borderColor: '#36A2EB',
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
