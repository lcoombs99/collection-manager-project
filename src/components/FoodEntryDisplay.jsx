// display current data, edit and delete buttons
import NewFoodForm from './NewFoodForm.jsx';

function FoodEntryDisplay({entryData, onEditEntryClick, onDeleteEntryClick, onCloseEdit, isEditing, handleSubmit}) {

  return (
    <div className="card">
      <h3>{entryData.food ?? null}</h3>
      {isEditing ?
        <NewFoodForm onCloseEdit={onCloseEdit} handleSubmit={handleSubmit} entryData={entryData}/> :
        <div>
          <div className="entry">{entryData.date} {entryData.time}</div>
          <div className="entry">{entryData.meal}</div>
          <div className="entry">Notes: {entryData.notes ?? null}</div>
          <button className="button" onClick={onEditEntryClick}>Edit</button>
          <button className="button" onClick={onDeleteEntryClick}>Delete</button>
        </div>
      }
    </div>
  );
}

export default FoodEntryDisplay;