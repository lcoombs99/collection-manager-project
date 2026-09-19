import FoodForm from './FoodForm.jsx';

function EntryEdit({entryData, handleUpdateMeal, onCloseEdit}) {
  // props: entryData, handleUpdateMeal, onCloseEdit
  return (
    <div>
      <FoodForm
        onCloseEdit={onCloseEdit}
        handleUpdateMeal={handleUpdateMeal}
        entryData={entryData}
      />
    </div>
  );
}

export default EntryEdit;