const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animals = {};
    species.forEach((element) => {
      animals[element.name] = element.residents.length;
    });
    return animals;
  } if (!animal.sex) {
    return species.filter(({ name: nome }) => animal.specie === nome)
      .map(({ residents }) => residents.length)[0];
  }
  return species.filter(({ name: nome }) => animal.specie === nome)
    .map(({ residents }) => residents.sex)[0].length
    && species.filter(({ sex: sexo }) => animal.sex === sexo).map;
}

/* species.filter((element, index) => element[index.name] === animal.specie)
    .filter((element, index) => animal.sex === element[index.residents[index.sex]]).length; */

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
