import FoodEntry from './FoodEntry.jsx';

function EntryList({entries, onDeleteMeal, handleUpdateMeal}) {
  //props: entries, onDeleteMeal, handleUpdateMeal

  return (
    <div>
      <h3>Food Log</h3>

      {entries.map((entry) =>
        <FoodEntry entryData={entry} key={entry.id} onDeleteMeal={onDeleteMeal} handleUpdateMeal={handleUpdateMeal}/>
      )}
    </div>
  );
}

export default EntryList;