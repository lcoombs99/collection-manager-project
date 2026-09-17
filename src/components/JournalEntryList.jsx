import FoodEntry from './FoodEntry.jsx';

// Journal Entry List role:
// Display entries
function JournalEntryList({entries, onDeleteMeal, handleUpdateMeal}) {
  //props: entries, onDeleteMeal, handleSubmit (either create or update)

  return (
    <div>
      {entries.map((entry) =>
        <FoodEntry entryData={entry} key={entry.id} onDeleteMeal={onDeleteMeal} handleUpdateMeal={handleUpdateMeal}/>
      )}
    </div>
  );
}

export default JournalEntryList;