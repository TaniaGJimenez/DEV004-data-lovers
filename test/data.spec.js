import {tarjetas,filtrarTipos,buscarPorNombre } from '../src/data.js';

const data =
{
  "pokemon":[
    {
      "num": "002",
      "name": "ivysaur",
      "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
        "grass",
        "poison",
      ],
    },

    {
      "num": "003",
      "name": "venusaur",
      "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
        "grass",
        "poison"],
    
    },
  
    {
      "num": "004",
      "name": "charmander",
      "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
      "type": [
        "fire"
      ],
    },
    {
  
  
      "num": "005",
      "name": "charmeleon",
      "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
    
      "type": [
        "fire"
      ],
    },
    {
      "num": "006",
      "name": "charizard",
      "img": "https://www.serebii.net/pokemongo/pokemon/006.png",
      "type": [
        "fire",
        "flying"
      ],
    },
  ],
} ; 


describe('tarjetas', () => {
  it('is a function', () => {
    expect(typeof tarjetas).toBe('function');
  });

  it('tarjetas(data) retorna una cadena', () => {
    expect(typeof tarjetas(data)).toBe('string');
  });
});
describe('filtrarTipos', () => {
  it('is a function', () => {
    expect(typeof filtrarTipos).toBe('function');
  });
  it('filtrarTipos(data, tipo) retorna un objeto', () => {
    expect(typeof filtrarTipos(data,"fire")).toBe('object');
  })
});

describe('buscarPorNombre', () => {
  it('is a function', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });
  it('buscarPorNombre(data,buscarPorNombre ) retorna un objeto', () => {
    expect(typeof buscarPorNombre(data,"ch")).toBe('object');
  });
  it('buscarPorNombre(data,buscarPorNombre ) retorna un array vacio cuando buscamos un nombre de pokemon q no existe', () => {
    const resultadoEsperado = { pokemon: [] };
    const resultadoObtenido = buscarPorNombre(data,"ch");
    expect(resultadoObtenido).toStrictEqual(resultadoEsperado);
  })
  it('buscarPorNombre(data,buscarPorNombre ) retorna un array con un elemento cuando buscamos `charmander`', () => {
    const resultadoEsperado = {
      pokemon: [
        {
          name: "charmander",
        },
      ],
    };
    const resultadoObtenido = buscarPorNombre(data,"charmander").pokemon.map((p) =>  { return {name: p.name}});
    expect({ pokemon: resultadoObtenido }).toStrictEqual(resultadoEsperado);
  })
});
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
