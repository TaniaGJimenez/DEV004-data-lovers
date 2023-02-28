import {
  tarjetas,
  filtrarTipos,
  buscarPorNombre,
  abcOrder,
} from "../src/data.js";

const data = {
  pokemon: [
    {
      num: "002",
      name: "ivysaur",
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
    },
    {
      num: "003",
      name: "venusaur",
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
    },
    {
      num: "004",
      name: "charmander",
      img: "https://www.serebii.net/pokemongo/pokemon/004.png",
      type: ["fire"],
    },
    {
      num: "005",
      name: "charmeleon",
      img: "https://www.serebii.net/pokemongo/pokemon/005.png",
      type: ["fire"],
    },
    {
      num: "006",
      name: "charizard",
      img: "https://www.serebii.net/pokemongo/pokemon/006.png",
      type: ["fire", "flying"],
    },
  ],
};

describe("tarjetas", () => {
  it("is a function", () => {
    expect(typeof tarjetas).toBe("function");
  });

  it("tarjetas(data) retorna una cadena", () => {
    expect(typeof tarjetas(data)).toBe("string");
  });
});
describe("filtrarTipos", () => {
  it("is a function", () => {
    expect(typeof filtrarTipos).toBe("function");
  });
  it("filtrarTipos(data, tipo) retorna un objeto", () => {
    expect(typeof filtrarTipos(data, "fire")).toBe("object");
  });
  it("filtrarTipos(data,tipo) retorna un arreglo de objetos filtrados", () => {
    expect(filtrarTipos(data, "fire")).toStrictEqual({
      pokemon: [
        {
          num: "004",
          name: "charmander",
          img: "https://www.serebii.net/pokemongo/pokemon/004.png",
          type: ["fire"],
        },
        {
          num: "005",
          name: "charmeleon",
          img: "https://www.serebii.net/pokemongo/pokemon/005.png",
          type: ["fire"],
        },
        {
          num: "006",
          name: "charizard",
          img: "https://www.serebii.net/pokemongo/pokemon/006.png",
          type: ["fire", "flying"],
        },
      ],
    });
  });
});

describe("buscarPorNombre", () => {
  it("is a function", () => {
    expect(typeof buscarPorNombre).toBe("function");
  });
  it("buscarPorNombre(data,buscarPorNombre ) retorna un objeto", () => {
    expect(typeof buscarPorNombre(data, "ch")).toBe("object");
  });
  it("buscarPorNombre(data,buscarPorNombre ) retorna los pokemones que coinciden con las primeras letras de su nombre", () => {
    const expected = {
      pokemon: [
        {
          num: "004",
          name: "charmander",
          img: "https://www.serebii.net/pokemongo/pokemon/004.png",
          type: ["fire"],
        },
        {
          num: "005",
          name: "charmeleon",
          img: "https://www.serebii.net/pokemongo/pokemon/005.png",
          type: ["fire"],
        },
        {
          num: "006",
          name: "charizard",
          img: "https://www.serebii.net/pokemongo/pokemon/006.png",
          type: ["fire", "flying"],
        },
      ],
    };
    expect(buscarPorNombre(data, "ch")).toEqual(expected);
  });
  it("buscarPorNombre(data,buscarPorNombre ) retorna un array con un elemento cuando buscamos `charmander`", () => {
    const resultadoEsperado = {
      pokemon: [
        {
          name: "charmander",
        },
      ],
    };
    const resultadoObtenido = buscarPorNombre(data, "charmander").pokemon.map(
      (p) => {
        return { name: p.name };
      }
    );
    expect({ pokemon: resultadoObtenido }).toStrictEqual(resultadoEsperado);
  });
  it("buscarPorNombre(data, nombre) devuelve un arreglo vacío si el nombre no está en la data", () => {
    expect(buscarPorNombre(data, "Inventado")).toStrictEqual({ pokemon: [] });
  });
});

describe("abcOrder", () => {
  it("is a function", () => {
    expect(typeof abcOrder).toBe("function");
  });
  it("abcOrder(data) retorna un objeto", () => {
    expect(typeof abcOrder(data)).toBe("object");
  });
  //////////////
  it("ordena los datos de A a Z", () => {
    const expected = {
      pokemon: [
        {
          name: "charizard",
        },
        {
          name: "charmander",
        },
        {
          name: "charmeleon",
        },
        {
          name: "ivysaur",
        },
        {
          name: "venusaur",
        },
      ],
    };
    const result = abcOrder(data, "AZ").pokemon.map((p) => {
      return { name: p.name };
    });
    expect({ pokemon: result }).toEqual(expected);
  });
  
  it("ordena los datos de Z a A", () => {
    const expected = {
      pokemon: [
        {
          name: "venusaur",
        },
        {
          name: "ivysaur",
        },
        {
          name: "charmeleon",
        },
        {
          name: "charmander",
        },
        {
          name: "charizard",
        },
      ],
    };
    const result = abcOrder(data, "ZA").pokemon.map((p) => {
      return { name: p.name };
    });
    expect({ pokemon: result }).toEqual(expected);
  });

});
