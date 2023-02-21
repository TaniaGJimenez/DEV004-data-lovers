// estas funciones son de ejemplo

// export const Imagenes = () => {
//   return "Imagenes";
// };

// export const anotherExample = () => {
//   return "OMG";
// };
export const tarjetas = (data) => {
  let tarjetaString = "";
  for (const pokemon of data.pokemon) {
    tarjetaString += `
      <section class="tarjeta">
        <img class="imagenPokemon" src=${pokemon.img} >
        <p>#${pokemon.num}<br>${pokemon.name.toUpperCase()}</p> 
        <div class="pokemon-tipos">
        ${pokemon.type}
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
  //console.log(dataFiltrada);
  return { pokemon: dataFiltrada };
};

export const buscarPorNombre = (data, nombreBuscar) => {
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.name.startsWith(nombreBuscar))
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
    //return 0;
  })
  if (order === 'AZ') {
    return {pokemon:orderArray}  
  } else {
    const inverso = orderArray.reverse();
    return {pokemon:inverso}
  }
}
export const ordenarArregloNumero = (clave, orden, data) => {
  const dataOrdenada = {}
  if (orden === 'ascendente') {
    dataOrdenada.pokemon = data.pokemon.sort((a, b) => Number(a[clave]) - Number(b[clave]))
  } else {
    dataOrdenada.pokemon = data.pokemon.sort((a, b) => Number(b[clave]) - Number(a[clave]))
  }
  return dataOrdenada;
};

export const cortarTop = (dataOrdenada, top) => {
  const Top10 = {}
  Top10.pokemon = dataOrdenada.pokemon.slice(0, top)
  return Top10;
};
