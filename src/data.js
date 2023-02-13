//import data from './data/pokemon/pokemon.js'
// estas funciones son de ejemplo

export const Imagenes = () => {
  return 'Imagenes';
};

export const anotherExample = () => {
  return 'OMG';
};
export const tarjetas = (data) => {
  let tarjetaString = ""
  for (const pokemon of data.pokemon) {
    tarjetaString += `
      <section class="tarjeta">
        <img class="imagenPokemon" src=${pokemon.img} >
        <p>#${pokemon.num}<br>${pokemon.name}</p> 
      </section>
    `
  }
  return tarjetaString;
};
export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.type.includes(tipo))
  console.log(dataFiltrada);
  return { pokemon: dataFiltrada }
}

export const filtrarTipos = (data, tipo) => {
const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.type.includes(tipo))
console.log(dataFiltrada);
return { pokemon: dataFiltrada }
}

//export const fireTypePokemons = data.pokemon.filter((pokemon) => {return pokemon.type === 'fire'})