import { useState } from 'react';
import { MEAL_LIST } from '../constants.jsx';

// App -> NewFoodForm
// props: entryData?, handleCancelEdit
function NewFoodForm({entryData, onCloseEdit, handleSubmit}) {
  const isEditing = entryData != null;
  // const [isDisabled, setIsDisabled] = useState(true);

  const [dateInput, setDateInput] = useState(isEditing ? entryData.date :
    new Date().toLocaleDateString('en-CA')
  );

  const getCurrentTime = () => {
    const now = new Date();

    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };
  console.log('EDITING', isEditing);
  const [selectedMeal, setSelectedMeal] = useState(isEditing ? entryData.meal : 'Choose One');
  const [foodInput, setFoodInput] = useState(isEditing ? entryData.food : '');
  const [notesInput, setNotesInput] = useState(isEditing ? entryData.notes : '');
  const [timeInput, setTimeInput] = useState(isEditing ? entryData.time : getCurrentTime());

  console.log('note', notesInput);
  const submitHandler = (e) => {
    e.preventDefault();

    const meal = {
      id: isEditing ? entryData.id : crypto.randomUUID(),
      date: dateInput,
      time: timeInput,
      meal: selectedMeal,
      food: foodInput,
      reaction: [''],
      notes: notesInput
    };
    // handleCancelEdit();
    onCloseEdit();
    handleSubmit(meal);
  };

  return (
    <div className="new-food-form">

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
      <div className="form-control">
        <label>Notes</label>
        <input
          type="text"
          value={notesInput}
          onChange={(e) => setNotesInput(e.target.value)}
        />
        <button onClick={onCloseEdit} className="button">Cancel</button>
        {/*<button disabled={isDisabled} onClick={submitHandler} className="button">Submit</button>*/}
        <button onClick={submitHandler} className="button">Submit</button>
      </div>
    </div>
  );
}

export default NewFoodForm;