const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idEmployee) {
  // seu código aqui
  const encontraId = employees.find((element) => idEmployee === element.id);
  const { responsibleFor } = encontraId;
  const encontraAnimal = species.find((element) => responsibleFor[0] === element.id);
  const { residents } = encontraAnimal;
  const animalByAge = residents.sort((a, b) => a.age - b.age);
  const arrayAnimal = [`${animalByAge.at(-1).name}`,
    `${animalByAge.at(-1).sex}`, animalByAge.at(-1).age];
  return arrayAnimal;
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
