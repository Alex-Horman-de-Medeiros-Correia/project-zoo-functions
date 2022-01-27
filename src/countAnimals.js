const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const abrigo = {};
    species.map((element) => {
      abrigo[element.name] = element.residents.length;
      return abrigo;
    });
    return abrigo;
  }

  const { residents } = species.find((elementOne) => elementOne.name === animal.specie);
  const contador = residents.filter((elementTwo) => elementTwo.sex === animal.sex).length;

  return (animal.sex) ? contador : residents.length;
}

module.exports = countAnimals;
