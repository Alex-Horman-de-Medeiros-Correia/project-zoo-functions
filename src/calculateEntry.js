const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(entrants) {
  // seu código aqui
  const objeto = { child: 0, adult: 0, senior: 0 };

  if (entrants.length > 0) {
    objeto.child = entrants.filter((elementOne) => elementOne.age < 18).length;
    objeto.adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
    objeto.senior = entrants.filter((elemento) => elemento.age >= 50).length;
  }

  return objeto;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  const retornando = countEntrants(entrants);
  let valor = 0;
  valor += retornando.child * prices.child;
  valor += retornando.adult * prices.adult;
  valor += retornando.senior * prices.senior;

  return valor;
}

module.exports = { calculateEntry, countEntrants };
