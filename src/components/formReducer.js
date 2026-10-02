// initial state
export const initialState = {
  dateInput: '',
  timeInput: '',
  selectedMeal: 'Choose One',
  foodInput: '',
  notesInput: '',
  selectedReactions: [],
  errorMessage: null
};

// form reducer use switch for all types
// types: SET_DATE, SET_TIME, SET_MEAL, SET_FOOD, SET_NOTES, VALIDATE,
// return ...
export function formReducer(state, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        dateInput: action.value
      };

    case 'SET_TIME':
      return {
        ...state,
        timeInput: action.value
      };

    case 'SET_MEAL':
      return {
        ...state,
        selectedMeal: action.value
      };

    case 'SET_FOOD':
      return {
        ...state,
        foodInput: action.value
      };

    case 'SET_NOTES':
      return {
        ...state,
        notesInput: action.value
      };

    case 'SET_REACTIONS':
      return {
        ...state,
        selectedReactions: action.value
      };

    case 'VALIDATE':
      return {
        ...state,
        isValid: action.isValid,
        errorMessage: action.errorMessage
      };

    case 'INITIALIZE_FORM':
      return action.value;

    default:
      return state;
  }
}

// helper functions
export function getCurrentTime() {
  const now = new Date();

  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

export function getCurrentDate() {
  const now = new Date();

  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

