
export const tarjetas = (data) => {
  let tarjetaString = "";
  for (const pokemon of data.pokemon) {
    tarjetaString += `
      <section class="tarjeta">
        <img class="imagenPokemon" src=${pokemon.img} >
        <p>#${pokemon.num}<br>${pokemon.name.toUpperCase()}</p> 
        
    </div>
    </section>
    `;
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
