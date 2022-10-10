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

function validEntries(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return daysOpening;
  } if (!animals.includes(scheduleTarget)) {
    return daysOpening;
  }
  if (!days.includes(scheduleTarget)) {
    return daysOpening;
  }
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  validEntries(scheduleTarget);
  const mondayDay = { [scheduleTarget]: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' } };
  if (scheduleTarget === 'Monday') {
    return mondayDay;
  }
  if (days.includes(scheduleTarget)) {
    const { open, close } = hours[scheduleTarget];
    const weekDay = { [scheduleTarget]: { officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: [] } };
    return weekDay;
  }
  if (animals.includes(scheduleTarget)) {
    return 0;
  }
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
