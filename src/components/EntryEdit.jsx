import FoodForm from './FoodForm.jsx';

function EntryEdit({entryData, handleUpdateMeal, onCloseEdit}) {
  return (
    <div className="card">
      <FoodForm onCloseEdit={onCloseEdit} handleUpdateMeal={handleUpdateMeal} entryData={entryData}/>
    </div>
  );
}

export default EntryEdit;