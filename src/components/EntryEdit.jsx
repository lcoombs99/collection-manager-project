import FoodForm from './FoodForm.jsx';

function EntryEdit({entryData, handleUpdateMeal, onCloseEdit}) {
  // props: entryData, handleUpdateMeal, onCloseEdit
  return (
    <>
      <FoodForm
        onCloseEdit={onCloseEdit}
        handleUpdateMeal={handleUpdateMeal}
        entryData={entryData}
      />
    </>
  );
}

export default EntryEdit;