const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const empregado = employees.find((element) => element.id === id).responsibleFor[0];
  const animal = species.find((elementTwo) => elementTwo.id === empregado).residents;
  animal.sort((um, dois) => dois.age - um.age);

  /* return [...animal]; */
  return Object.values(animal[0]);
}

module.exports = getOldestFromFirstSpecies;
