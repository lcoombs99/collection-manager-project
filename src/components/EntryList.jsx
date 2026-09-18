import EntryCard from './EntryCard.jsx';

function EntryList({entries, onDeleteMeal, handleUpdateMeal}) {
  //props: entries, onDeleteMeal, handleUpdateMeal

  return (
    <div className="entry-section">
      <h3>Food Log</h3>
      <div className="entry-list">
        {entries.map((entry) =>
          <EntryCard entryData={entry} key={entry.id} onDeleteMeal={onDeleteMeal} handleUpdateMeal={handleUpdateMeal}/>
        )}
      </div>
    </div>
  );
}

export default EntryList;