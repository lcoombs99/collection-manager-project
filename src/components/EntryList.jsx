import EntryCard from './EntryCard.jsx';

function EntryList({entries, onDeleteMeal, handleUpdateMeal}) {
  //props: entries, onDeleteMeal, handleUpdateMeal

  return (
    <div>
      <h3>Food Log</h3>

      {entries.map((entry) =>
        <EntryCard entryData={entry} key={entry.id} onDeleteMeal={onDeleteMeal} handleUpdateMeal={handleUpdateMeal}/>
      )}
    </div>
  );
}

export default EntryList;