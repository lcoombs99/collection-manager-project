import FoodEntry from './FoodEntry.jsx';

// Journal Entry List role:
// Display entries
function JournalEntryList({entries, onDeleteMeal, handleSubmit}) {
  //props: entries, onDeleteMeal, handleSubmit (either create or update)

  return (
    <div>
      {entries.map((entry) =>
        <FoodEntry entryData={entry} key={entry.id} onDeleteMeal={onDeleteMeal} handleSubmit={handleSubmit}/>
      )}
    </div>
  );
}

export default JournalEntryList;