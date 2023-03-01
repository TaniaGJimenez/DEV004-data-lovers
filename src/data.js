
export const tarjetas = (data) => {
  let tarjetaString = "";
  for (const pokemon of data.pokemon) {
    tarjetaString += `
    <div class="card">
      <div class="front tarjeta">
        <img class="imagenPokemon" src=${pokemon.img} >
        <p>#${pokemon.num}<br>${pokemon.name.toUpperCase()}</p> 
    </div> 
      <div class="back tarjeta" >
        <p> Ataque:<br> ${pokemon.stats["base-attack"]}
        <br>Defensa:<br> ${pokemon.stats["base-defense"]} 
        <br>Resisencia:<br> ${pokemon.stats["base-stamina"]} 
        <br>Max-cp:<br> ${pokemon.stats["max-cp"]}
        <br>Max-hp:<br> ${pokemon.stats["max-hp"]}</p>
      </div>
    </div>`;
  }
  return tarjetaString;
};

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.pokemon.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return { pokemon: dataFiltrada };
};

export const buscarPorNombre = (data, nombreBuscar) => {
  const withoutSpaces = nombreBuscar.trim();
  //const withoutSpaces = nombreBuscar.replace(/\s/g, '');
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.name.startsWith(withoutSpaces))
  return { pokemon: dataFiltrada }
};

export function abcOrder(data, order) {
  const orderArray = data.pokemon.slice().sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    else {
      return 1;
    }
  })
  if (order === 'AZ') {
    return {pokemon:orderArray}  
  } else {
    const inverso = orderArray.reverse();
    return {pokemon:inverso}
  }
}
