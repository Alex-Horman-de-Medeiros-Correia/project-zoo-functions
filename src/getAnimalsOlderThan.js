const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const funcao = species.find((element) => animal === element.name);
  return funcao.residents.every((elementTwo) => age <= elementTwo.age);
}

module.exports = getAnimalsOlderThan;
