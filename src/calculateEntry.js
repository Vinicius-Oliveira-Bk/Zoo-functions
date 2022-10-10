const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const visitantes = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitantes.child += 1;
    } if (element.age >= 18 && element.age < 50) {
      visitantes.adult += 1;
    } if (element.age >= 50) {
      visitantes.senior += 1;
    }
  });
  return visitantes;
}

function calculateEntry(entrants) {
  // seu código aqui
  let valorEntrada = 0;
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const quantVisitantes = countEntrants(entrants);
  const { child } = quantVisitantes;
  const { adult } = quantVisitantes;
  const { senior } = quantVisitantes;
  valorEntrada += (adult * 49.99);
  valorEntrada += (senior * 24.99);
  valorEntrada += (child * 20.99);
  return valorEntrada;
}

module.exports = { calculateEntry, countEntrants };
