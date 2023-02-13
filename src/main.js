/*import { fireTypePokemons} from './data.js';
console.log(data)
console.log(fireTypePokemons)
const fireTypePokemons = document.getElementById("BtnFireType")
*/
import { Imagenes,tarjetas,filtrarTipos} from './data.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(Imagenes)
console.log(data);
const btn = document.getElementById("btn");
const dataContainer = document.getElementById("dataContainer");
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data)

//const filtrarTipos = document.getElementById("btnTipos")

btn.addEventListener("click", function() {
  // Mostrar o ocultar el contenedor de datos
  dataContainer.style.display = (dataContainer.style.display === "none") ? "block" : "none";
  
  // Si el contenedor de datos está visible, 
  if (dataContainer.style.display === "block") {
  }
});
