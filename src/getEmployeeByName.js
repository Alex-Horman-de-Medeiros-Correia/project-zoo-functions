const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find((element) => employeeName === element.firstName
  || employeeName === element.lastName);
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
