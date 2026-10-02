import { useEffect, useReducer } from 'react';
import { MEAL_LIST, REACTIONS_LIST } from '../constants.jsx';
import { formReducer, getCurrentDate, getCurrentTime, initialState } from './formReducer.js';

function NewFoodForm({entryData, onCloseEdit, handleUpdateMeal, handleAddNewMeal}) {
  // useReducer
  const [state, dispatch] = useReducer(formReducer, initialState);
  const isEditing = entryData != null;

  // use effect---I'm not sure this is completely necessary, honestly, since entryData
  // however, it does initialize the form with existing data only on load if editing.
  useEffect(() => {
    dispatch({
      type: 'INITIALIZE_FORM',
      value: {
        dateInput: isEditing ? entryData.date : getCurrentDate(),
        timeInput: isEditing ? entryData.time : getCurrentTime(),
        selectedMeal: isEditing ? entryData.meal : 'Choose One',
        foodInput: isEditing ? entryData.food : '',
        notesInput: isEditing ? entryData.notes : '',
        selectedReactions: isEditing ? entryData.reactions : [],
        errorMessage: null,
        isValid: false
      }
    });
  }, [entryData, isEditing]);

  const handleReactionSelect = (checkedValue) => {
    let updatedReactions;
    // update selected reaction
    if (state.selectedReactions.includes(checkedValue)) {
      updatedReactions = state.selectedReactions.filter(
        reaction => reaction !== checkedValue
      );
    } else {
      updatedReactions = [
        ...state.selectedReactions,
        checkedValue
      ];
    }
    // dispatch new value: 'SET_REACTIONS' type
    dispatch({
      type: 'SET_REACTIONS',
      value: updatedReactions
    });
  };

  const validateForm = () => {
    // console.log('VALIDATE FORM');
    if (state.selectedMeal === 'Choose One') {
      return {
        isValid: false,
        errorMessage: 'Please select a meal'
      };
    }

    if (state.foodInput.trim() === '') {
      return {
        isValid: false,
        errorMessage: 'Please enter a food'
      };
    }

    if (state.dateInput.trim() === '') {
      return {
        isValid: false,
        errorMessage: 'Please enter a valid date'
      };
    }

    if (state.timeInput.trim() === '') {
      return {
        isValid: false,
        errorMessage: 'Please enter a valid time'
      };
    }

    return {
      isValid: true,
      errorMessage: null
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const validation = validateForm();

    // validate form ONLY when submitting
    dispatch({
      type: 'VALIDATE',
      isValid: validation.isValid,
      errorMessage: validation.errorMessage
    });

    if (!validation.isValid) {
      return;
    }

    const meal = {
      id: isEditing ? entryData.id : crypto.randomUUID(),
      date: state.dateInput,
      time: state.timeInput,
      meal: state.selectedMeal,
      food: state.foodInput,
      reactions: state.selectedReactions,
      notes: state.notesInput
    };

    onCloseEdit();

    isEditing ? handleUpdateMeal(meal) : handleAddNewMeal(meal);
  };

  return (
    <div className="form-grid">
      <div className="form-control">
        <label>Meal</label>
        <select
          value={state.selectedMeal}
          onChange={(e) =>
            dispatch({
              type: 'SET_MEAL',
              value: e.target.value
            })
          }
        >
          {MEAL_LIST.map((meal) => (
            <option value={meal} key={meal}>
              {meal}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          value={state.dateInput}
          onChange={(e) =>
            dispatch({
              type: 'SET_DATE',
              value: e.target.value
            })
          }
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="time"
          value={state.timeInput}
          onChange={(e) =>
            dispatch({
              type: 'SET_TIME',
              value: e.target.value
            })
          }
        />
      </div>
      <div className="form-control food-input">
        <label>Food</label>
        <input
          type="text"
          value={state.foodInput}
          onChange={(e) =>
            dispatch({
              type: 'SET_FOOD',
              value: e.target.value
            })
          }
        />
      </div>
      <div className="form-control notes-input">
        <label>Notes</label>
        <input
          type="text"
          maxLength={100}
          value={state.notesInput}
          onChange={(e) =>
            dispatch({
              type: 'SET_NOTES',
              value: e.target.value
            })
          }
        />
      </div>
      <div className="reactions">
        <strong>Reactions</strong>
        {REACTIONS_LIST.map((reaction, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={index.toString()}
              name={reaction}
              value={reaction}
              checked={state.selectedReactions.includes(reaction)}
              onChange={() => handleReactionSelect(reaction)}
            />
            <label htmlFor={index.toString()}>{reaction}</label>
          </div>
        ))}
      </div>
      <p className="error-message">{state.errorMessage}</p>
      <div className="card-actions">
        <button onClick={onCloseEdit} className="button">Cancel</button>
        <button onClick={submitHandler} className="button">Submit</button>
      </div>
    </div>
  );
}

export default NewFoodForm;
