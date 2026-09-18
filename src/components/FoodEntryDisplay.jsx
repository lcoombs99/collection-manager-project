import FoodForm from './FoodForm.jsx';

function FoodEntryDisplay({entryData, onEditEntryClick, onDeleteEntryClick, onCloseEdit, isEditing, handleUpdateMeal}) {

  return (
    <div className="card">
      {/*<h3>{entryData.food ?? null}</h3>*/}
      <h3>{entryData.food}</h3>
      {isEditing ?
        // <NewFoodForm onCloseEdit={onCloseEdit} handleUpdateMeal={handleUpdateMeal} entryData={entryData}/> :
        <FoodForm onCloseEdit={onCloseEdit} handleUpdateMeal={handleUpdateMeal} entryData={entryData}/> :
        <div>
          <div className="entry">{entryData.date} {entryData.time}</div>
          <div className="entry">{entryData.meal}</div>
          <div className="entry">Notes: {entryData.notes ?? null}</div>
          <ul className="list">
            {
              entryData.reactions.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
          <button className="button" onClick={onEditEntryClick}>Edit</button>
          <button className="button" onClick={onDeleteEntryClick}>Delete</button>
        </div>
      }
    </div>
  );
}

export default FoodEntryDisplay;