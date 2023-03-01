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
      stats: {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      },
    },
    {
      num: "003",
      name: "venusaur",
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      stats: {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      },
    },
    {
      num: "004",
      name: "charmander",
      img: "https://www.serebii.net/pokemongo/pokemon/004.png",
      type: ["fire"],
      stats: {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      },
    },
    {
      num: "005",
      name: "charmeleon",
      img: "https://www.serebii.net/pokemongo/pokemon/005.png",
      type: ["fire"],
      stats: {
        "base-attack": "158",
        "base-defense": "126",
        "base-stamina": "151",
        "max-cp": "1653",
        "max-hp": "131"
      },
    },
    {
      num: "006",
      name: "charizard",
      img: "https://www.serebii.net/pokemongo/pokemon/006.png",
      type: ["fire", "flying"],
      stats: {
        "base-attack": "223",
        "base-defense": "173",
        "base-stamina": "186",
        "max-cp": "2889",
        "max-hp": "158"
      },
    },
  ],
};

describe("tarjetas", () => {
  it("tarjetas es una función", () => {
    expect(typeof tarjetas).toBe("function");
  });
  it("tarjetas retorna una cadena", () => {
    expect(typeof tarjetas(data)).toBe("string");
  });
});

describe("filtrarTipos", () => {
  it("filtrarTipos es una función", () => {
    expect(typeof filtrarTipos).toBe("function");
  });
  it("filtrarTipos retorna un objeto", () => {
    expect(typeof filtrarTipos(data, "fire")).toBe("object");
  });
  it("filtrarTipos retorna un arreglo de objetos filtrados", () => {
    expect(filtrarTipos(data, "fire")).toStrictEqual({
      pokemon: [
        {
          num: "004",
          name: "charmander",
          img: "https://www.serebii.net/pokemongo/pokemon/004.png",
          type: ["fire"],
          stats: {
            "base-attack": "116",
            "base-defense": "93",
            "base-stamina": "118",
            "max-cp": "980",
            "max-hp": "105"
          },
        },
        {
          num: "005",
          name: "charmeleon",
          img: "https://www.serebii.net/pokemongo/pokemon/005.png",
          type: ["fire"],
          stats: {
            "base-attack": "158",
            "base-defense": "126",
            "base-stamina": "151",
            "max-cp": "1653",
            "max-hp": "131"
          },
        },
        {
          num: "006",
          name: "charizard",
          img: "https://www.serebii.net/pokemongo/pokemon/006.png",
          type: ["fire", "flying"],
          stats: {
            "base-attack": "223",
            "base-defense": "173",
            "base-stamina": "186",
            "max-cp": "2889",
            "max-hp": "158"
          },
        },
      ],
    });
  });
});

describe("buscarPorNombre", () => {
  it("buscarPorNombre es una función", () => {
    expect(typeof buscarPorNombre).toBe("function");
  });
  it("buscarPorNombre retorna un objeto", () => {
    expect(typeof buscarPorNombre(data, "ch")).toBe("object");
  });
  it("buscarPorNombre retorna los pokemones que coinciden con las primeras letras de su nombre", () => {
    const expected = {
      pokemon: [
        {
          num: "004",
          name: "charmander",
          img: "https://www.serebii.net/pokemongo/pokemon/004.png",
          type: ["fire"],
          stats: {
            "base-attack": "116",
            "base-defense": "93",
            "base-stamina": "118",
            "max-cp": "980",
            "max-hp": "105"
          },
        },
        {
          num: "005",
          name: "charmeleon",
          img: "https://www.serebii.net/pokemongo/pokemon/005.png",
          type: ["fire"],
          stats: {
            "base-attack": "158",
            "base-defense": "126",
            "base-stamina": "151",
            "max-cp": "1653",
            "max-hp": "131"
          },
        },
        {
          num: "006",
          name: "charizard",
          img: "https://www.serebii.net/pokemongo/pokemon/006.png",
          type: ["fire", "flying"],
          stats: {
            "base-attack": "223",
            "base-defense": "173",
            "base-stamina": "186",
            "max-cp": "2889",
            "max-hp": "158"
          },
        },
      ],
    };
    expect(buscarPorNombre(data, "ch")).toEqual(expected);
  });
  it("buscarPorNombre retorna un array con un elemento cuando buscamos `charmander`", () => {
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
  it("buscarPorNombre devuelve un arreglo vacío si el nombre no está en la data", () => {
    expect(buscarPorNombre(data, "Inventado")).toStrictEqual({ pokemon: [] });
  });
});

describe("abcOrder", () => {
  it("abcOrder es una función", () => {
    expect(typeof abcOrder).toBe("function");
  });
  it("abcOrder retorna un objeto", () => {
    expect(typeof abcOrder(data)).toBe("object");
  });
  it("abcOrder ordena los datos de A a Z", () => {
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
  it("abcOrder ordena los datos de Z a A", () => {
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
