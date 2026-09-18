import { useState } from 'react';
import { MEAL_LIST, REACTIONS_LIST } from '../constants.jsx';
// create: <FoodForm data={null} onCloseEdit={toggleFormState} handleAddNewMeal={handleAddNewMeal}/>
// edit:  <FoodForm onCloseEdit={onCloseEdit} handleUpdateMeal={handleUpdateMeal} entryData={entryData}/> :
function FoodForm({entryData, onCloseEdit, handleUpdateMeal, handleAddNewMeal}) {
  const isEditing = entryData != null;
  const [foodInput, setFoodInput] = useState(isEditing ? entryData.food : '');
  const [notesInput, setNotesInput] = useState(isEditing ? entryData.notes : '');
  const [selectedMeal, setSelectedMeal] = useState(isEditing ? entryData.meal : 'Choose One');
  const [selectedReactions, setSelectedReactions] = useState(isEditing ? entryData.reactions : []);
  const [timeInput, setTimeInput] = useState(isEditing ? entryData.time : getCurrentTime());
  const [dateInput, setDateInput] = useState(isEditing ? entryData.date :
    new Date().toLocaleDateString('en-CA')
  );

  // used old style function for hoisting
  function getCurrentTime() {
    const now = new Date();

    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  // Handle reaction select: add item to []
  const handleReactionSelect = (checkedValue) => {
    // when clicked, if checkedValue in [], remove, else add
    if (selectedReactions.includes(checkedValue)) {
      setSelectedReactions((prevState) => prevState.filter(reaction => reaction !== checkedValue));
    } else {
      setSelectedReactions([...selectedReactions, checkedValue]);
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
    onCloseEdit();
    // console.log('Submit', meal);
    isEditing ? handleUpdateMeal(meal) : handleAddNewMeal(meal);
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
      <div>
        {
          REACTIONS_LIST.map((reaction, index) => (
            <div key={index}>
              <label htmlFor={index.toString()}>{reaction}</label>
              <input
                type="checkbox"
                id={index.toString()}
                name={reaction}
                value={reaction}
                checked={selectedReactions.includes(reaction)}
                onChange={() => handleReactionSelect(reaction)}/>
            </div>
          ))
        }
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

export default FoodForm;