const TRAITS = require('./traits');

const DEFAULT_PROPERTIES = {
    nickname: '',

    get birthdate() {
        return new Date().toLocaleDateString();
    },

    get randomTrait() {
        const traits = [];
        TRAITS.forEach(TRAIT => {
            const traittype = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];

            traits.push({traittype, traitValue});
        });
        return traits;

    }
}

class Dragon {
    constructor({birthdate, nickname, traits} = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTrait;
    }
}

module.exports = Dragon;