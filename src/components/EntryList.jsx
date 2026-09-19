import EntryCard from './EntryCard.jsx';

function EntryList({entries, handleUpdateMeal, handleDeleteMeal}) {
  //props: entries, handleDeleteMeal, handleUpdateMeal

  return (
    <div className="entry-list-container">
      <h3>My Food Log</h3>
      <div className="entry-list">
        {entries.map((entry) =>
          <EntryCard
            key={entry.id}
            entryData={entry}
            handleUpdateMeal={handleUpdateMeal}
            handleDeleteMeal={handleDeleteMeal}
          />
        )}
      </div>
    </div>
  );
}

export default EntryList;