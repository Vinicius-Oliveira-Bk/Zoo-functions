const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const listAnimals = [];
  ids.map((id) => listAnimals.push(species.find((obj) => obj.id === id)));
  return listAnimals;
}

module.exports = getSpeciesByIds;
