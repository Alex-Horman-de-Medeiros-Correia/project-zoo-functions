const data = require('../data/zoo_data');

const formatandoHoras = (hours) => {
  const listaDeHoras = Object.entries(hours)
    .map(([dia, horas]) => ({
      [dia]: {
        officeHour: dia === 'Monday'
          ? 'CLOSED'
          : `Open from ${horas.open}am until ${horas.close}pm`,
        exhibition: dia === 'Monday'
          ? 'The zoo will be closed!'
          : [],
      },
    }));
  return listaDeHoras;
};

const avaliandoAnimaisPelaHora = (animais, listaDias, diasSemana) => {
  const resultado = listaDias;
  const resultadoDias = diasSemana;
  /* console.log(resultadoDias);
  console.log(diasSemana); */
  animais.forEach((animal) => {
    resultadoDias.forEach((dia, index) => {
      if (animal.availability.includes(dia)) {
        /* console.log(resultado); */
        resultado[index][dia].exhibition.push(animal.name);
      }
    });
  });
  return resultado;
};

function getSchedule(scheduleTarget) {
  const { species, hours } = data;
  const listaDeDias = Object.keys(hours);
  const listaAnimais = species.map((animal) => animal.name);
  const resultado = avaliandoAnimaisPelaHora(species, formatandoHoras(hours), listaDeDias);
  let novoObjeto = {};
  resultado.forEach((objeto) => {
    novoObjeto = { ...novoObjeto, ...objeto };
  });
  if (!listaDeDias.includes(scheduleTarget) && !listaAnimais.includes(scheduleTarget)) {
    return novoObjeto;
  }
  if (listaDeDias.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: novoObjeto[scheduleTarget],
    };
  }
  const animal = species.find((specie) => specie.name === scheduleTarget);
  return animal.availability;
}

getSchedule();

module.exports = getSchedule;

/* 'Tuesday': {
  'officeHour': 'Open from 8am until 6pm',
  'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
}, */
