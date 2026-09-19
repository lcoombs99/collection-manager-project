export const MEAL_LIST = [
  'Choose One',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack'
];

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
    date: '2026-09-15',
    time: '08:30',
    meal: 'Breakfast',
    food: 'Scrambled eggs and Toast',
    reactions: ['Itching / Hives'],
    notes: 'Itching started at 9:30'
  },
  {
    id: crypto.randomUUID(),
    date: '2026-09-16',
    time: '12:30',
    meal: 'Lunch',
    food: 'Peanut Butter and Jelly Sandwich',
    reactions: ['Itching / Hives'],
    notes: 'Grape Jelly'
  },
  {
    id: crypto.randomUUID(),
    date: '2026-09-16',
    time: '11:30',
    meal: 'Lunch',
    food: 'Pizza - pepperoni',
    reactions: ['Itching / Hives'],
    notes: ''
  },
  {
    id: crypto.randomUUID(),
    date: '2026-09-10',
    time: '16:30',
    meal: 'Dinner',
    food: 'Baked Potato',
    reactions: [],
    notes: 'with sour cream and butter'
  },
  {
    id: crypto.randomUUID(),
    date: '2026-07-04',
    time: '09:30',
    meal: 'Snack',
    food: 'String Cheese',
    reactions: [],
    notes: ''
  },
  {
    id: crypto.randomUUID(),
    date: '2026-08-10',
    time: '11:30',
    meal: 'Lunch',
    food: 'Macaroni and Cheese',
    reactions: ['Headache', 'Stomach Upset', 'Swelling'],
    notes: 'Symptoms began 45 minutes after eating'
  },
  {
    id: crypto.randomUUID(),
    date: '2026-08-15',
    time: '14:30',
    meal: 'Snack',
    food: 'Fruit Leather (Strawberry)',
    reactions: ['Headache'],
    notes: 'Minor headache'
  }
];