import NewFoodForm from './NewFoodForm.jsx';

function EntryEdit({entryData, handleUpdateMeal, onCloseEdit}) {
  // props: entryData, handleUpdateMeal, onCloseEdit
  return (
    <>
      <NewFoodForm
        onCloseEdit={onCloseEdit}
        handleUpdateMeal={handleUpdateMeal}
        entryData={entryData}
      />
    </>
  );
}

export default EntryEdit;