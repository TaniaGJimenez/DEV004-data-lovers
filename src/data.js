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

// export const ordenarAlfabeticamenteAscendente = (data) => {
//   const dataOrdenada = data.pokemon.sort((a, b) => { // a y b son dos parametros que se comparan
//     const A = a.name.toUpperCase(); // convierte los string a mayusculas para que se ordene alfabeticamente
//     const B = b.name.toUpperCase(); 
//     if (A < B) { //a se ordena antes que b
//       return -1;
//     }
//     if (A > B) { //b se ordena antes que a
//       return 1;
//     }

//     // no hay cambios
//     return 0;
//   });

//   return { pokemon: dataOrdenada }
// }

// //ordenado de la Z-A
// export const ordenarAlfabeticamenteDescendente = (data) => {
//   const dataOrdenada = data.pokemon.sort((a, b) => {
//     const A = a.name.toUpperCase();
//     const B = b.name.toUpperCase(); 
//     if (A < B) {
//       return 1;
//     }
//     if (A > B) {
//       return -1;
//     }

//     return 0;
//   });

//   return { pokemon: dataOrdenada }
// }
export const OrdenarPorNombre = (data) => {
  const SortData = data.pokemon.sort((a, b) =>
  { const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return 1;
    }
    
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  return{pokemon:SortData} 
 
};
export const OrdenarPorNombreAZ = (data) => {
  const SortData = data.pokemon.sort((a, b) =>
  { const nameA = a.name;
    const nameB = b.name;
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });
  return{pokemon:SortData} 
 
};
