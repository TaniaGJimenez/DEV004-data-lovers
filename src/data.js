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
        <h1> #${pokemon.num}.${pokemon.name} <br> Tipo: ${pokemon.type}<h1>
      </section>
    `
  }
  return tarjetaString;
};
