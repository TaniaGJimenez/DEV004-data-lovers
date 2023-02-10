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
        <p>#${pokemon.num}<br>${pokemon.name}<\p> 
      </section>
    `
  }
  return tarjetaString;
};
