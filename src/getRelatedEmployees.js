const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const manager = isManager(managerId);
  const responsibilities = [];
  if (manager === true) {
    employees.filter((element) => element.managers.includes(managerId))
      .filter((element) => responsibilities.push(`${element.firstName} ${element.lastName}`));
    return responsibilities;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
