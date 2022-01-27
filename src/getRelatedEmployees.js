const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const abrigo = [];
  employees.forEach((element) => {
    if (element.managers.includes(managerId)) {
      abrigo.push(`${element.firstName} ${element.lastName}`);
    }
  });
  return abrigo;
}

module.exports = { isManager, getRelatedEmployees };
