const TRAITS = require("../../data/traits.json");
const DragonTable = require("./table");

const DEFAULT_PROPERTIES = {
  nickname: "",
  generationId: undefined,

  get birthdate() {
    return new Date().toLocaleDateString();
  },

  get randomTrait() {
    const traits = [];
    TRAITS.forEach(TRAIT => {
      const traittype = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traittype, traitValue });
    });
    return traits;
  }
};

class Dragon {
  constructor({ birthdate, nickname, traits, generationId } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTrait;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }

  buildDragon() {}
}

module.exports = Dragon;
