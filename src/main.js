import { Imagenes,tarjetas} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(Imagenes)
console.log(data);
let btn = document.getElementById("btn");
let dataContainer = document.getElementById("dataContainer");
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data)


btn.addEventListener("click", function() {
    // Mostrar o ocultar el contenedor de datos
    dataContainer.style.display = (dataContainer.style.display === "none") ? "block" : "none";
  
    // Si el contenedor de datos está visible, 
    if (dataContainer.style.display === "block") {
    }
});
