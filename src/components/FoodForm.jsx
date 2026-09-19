import { useEffect, useState } from 'react';
import { MEAL_LIST, REACTIONS_LIST } from '../constants.jsx';

function FoodForm({entryData, onCloseEdit, handleUpdateMeal, handleAddNewMeal}) {
  const isEditing = entryData != null;
  const [foodInput, setFoodInput] = useState(isEditing ? entryData.food : '');
  const [notesInput, setNotesInput] = useState(isEditing ? entryData.notes : '');
  const [selectedMeal, setSelectedMeal] = useState(isEditing ? entryData.meal : 'Choose One');
  const [selectedReactions, setSelectedReactions] = useState(isEditing ? entryData.reactions : []);
  const [timeInput, setTimeInput] = useState(isEditing ? entryData.time : getCurrentTime());
  const [dateInput, setDateInput] = useState(isEditing ? entryData.date :
    new Date().toLocaleDateString('en-US')
  );
  const [errorMessage, setErrorMessage] = useState(null);

  // used old style function for hoisting to keep state separate from functions
  function getCurrentTime() {
    const now = new Date();

    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  const handleReactionSelect = (checkedValue) => {
    if (selectedReactions.includes(checkedValue)) {
      setSelectedReactions((prevState) => prevState.filter(reaction => reaction !== checkedValue));
    } else {
      setSelectedReactions([...selectedReactions, checkedValue]);
    }
  };

  // validate fields
  const validateFormState = () => {
    // required fields, foodInput, date, time, selected meal
    if (foodInput.trim() === '') {
      setErrorMessage('Please enter a food');
      return false;
    }
    if (dateInput.trim() === '') {
      setErrorMessage('Please enter a valid date');
      return false;
    }
    if (timeInput.trim() === '') {
      setErrorMessage('Please enter a valid time');
      return false;
    }
    if (selectedMeal === 'Choose One') {
      setErrorMessage('Please select a meal');
      return false;
    } else {
      setErrorMessage(null);
      return true;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const meal = {
      id: isEditing ? entryData.id : crypto.randomUUID(),
      date: dateInput,
      time: timeInput,
      meal: selectedMeal,
      food: foodInput,
      reactions: selectedReactions,
      notes: notesInput
    };

    const isValid = validateFormState();

    if (!isValid) {
      // not valid, message set and don't continue to submission or form close
      return;
    }

    onCloseEdit();
    isEditing ? handleUpdateMeal(meal) : handleAddNewMeal(meal);
  };

  return (
    <div className="form">
      <div className="form-control">
        <label>Meal</label>
        <select value={entryData?.meal ?? selectedMeal} onChange={(e) => setSelectedMeal(e.target.value)}>
          {MEAL_LIST.map((meal) => (
            <option value={meal} key={meal}>{meal}</option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label>Food</label>
        <input
          type="text"
          value={foodInput}
          onChange={(e) => setFoodInput(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="time"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
        />
      </div>
      <div className="reactions">
        {
          REACTIONS_LIST.map((reaction, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={index.toString()}
                name={reaction}
                value={reaction}
                checked={selectedReactions.includes(reaction)}
                onChange={() => handleReactionSelect(reaction)}/>
              <label htmlFor={index.toString()}>{reaction}</label>
            </div>
          ))
        }
      </div>
      <div className="form-control">
        <label>Notes</label>
        <input
          type="text"
          maxLength={100}
          value={notesInput}
          onChange={(e) => setNotesInput(e.target.value)}
        />
      </div>
      <p className="error-message">{errorMessage}</p>
      <div className="card-actions">
        <button onClick={onCloseEdit} className="button">Cancel</button>
        <button onClick={submitHandler} className="button">Submit</button>
        {/*<button disabled={!isFormValid} onClick={submitHandler} className="button">Submit</button>*/}
      </div>
    </div>
  );
}

export default FoodForm;