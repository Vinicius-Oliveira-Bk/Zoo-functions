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
  } return species.filter((element) => element.name === animal.specie.value
    && animal.sex === element.residents.sex).length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
