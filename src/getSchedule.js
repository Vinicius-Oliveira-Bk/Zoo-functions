const data = require('../data/zoo_data');

const { species, hours } = data;
const animals = species.map((element) => element.name);

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const daysOpening = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function validEntries(test) {
  if (test === undefined) {
    return daysOpening;
  }
  if (!animals.includes(test)) {
    return daysOpening;
  }
  if (!days.includes(test)) {
    return daysOpening;
  }
}

function returnDays(day) {
  const { [day]: { exhibition,
  } } = daysOpening;
  const { open, close } = hours[day];
  const weekDay = { [day]: { officeHour: `Open from ${open}am until ${close}pm`,
    exhibition,
  } };
  return weekDay;
}

function availabilityAnimals(animal) {
  const encontraAnimal = species.find((element) => element.name === animal);
  return encontraAnimal.availability;
}

function getSchedule(scheduleTarget) {
  const monday = { [scheduleTarget]: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' } };
  if (animals.includes(scheduleTarget)) {
    return availabilityAnimals(scheduleTarget);
  } if (scheduleTarget === 'Monday') {
    return monday;
  } if (days.includes(scheduleTarget)) {
    return returnDays(scheduleTarget);
  } return validEntries(scheduleTarget);
}

// console.log(availabilityAnimals('lions'));
// console.log(getSchedule('Tuesday'));
// console.log(validEntries('Tuesday'));

module.exports = getSchedule;
