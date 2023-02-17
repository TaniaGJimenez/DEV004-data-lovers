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
// export const buscarPorNombre1 = (data, tipo) => {
//   const dataFiltrada = data.pokemon.search((pokemon) =>  pokemon.name.includes(nombreBuscar))
//   return { pokemon: dataFiltrada }
// };