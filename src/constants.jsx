export const MEAL_LIST = ["Choose One", "Breakfast", "Lunch", "Dinner", "Snack"]

export const REACTIONS_LIST = [
  'Itching / Hives',
  'Swelling',
  'Throat Tightness',
  'Headache',
  'Stomach Upset'
];

export const INITIAL_DATA = [
  {
    id: crypto.randomUUID(),
    date: '2026-09-16',
    time: '08:30',
    meal: 'Breakfast',
    food: 'Scrambled eggs, toast',
    reactions: ['Itching / Hives'],
    notes: 'Itching started at 9:30'
  },
  {
    id: crypto.randomUUID(),
    date: '2026-09-16',
    time: '11:30',
    meal: 'Lunch',
    food: 'Pizza',
    reactions: ['Swelling'],
    notes: ''
  },
  {
    id: crypto.randomUUID(),
    date: '2026-09-16',
    time: '16:30',
    meal: 'Dinner',
    food: 'Potato',
    reactions: [],
    notes: ''
  }
];