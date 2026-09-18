function EntryDisplay({entryData, onEditEntryClick, onDeleteEntryClick}) {
// props: entryData, onEditEntryClick, onDeleteEntryClick
  console.log("reactions.length", entryData.reactions.length);
  return (
    <div className="card">
      <h3>{entryData.food}</h3>

      <div className="entry">{entryData.date} {entryData.time}</div>
      <div className="entry entry-meal">{entryData.meal}</div>
      <div className="notes">
        <strong>Notes</strong>
        <p>{entryData.notes}</p>
      </div>
      <div>
        {entryData && entryData.reactions?.length > 0 ?
          <ul className="list">
            {entryData.reactions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> : null
        }
      </div>
      <div className="card-actions">
        <button className="button" onClick={onEditEntryClick}>Edit</button>
        <button className="button" onClick={onDeleteEntryClick}>Delete</button>
      </div>
    </div>
  );
}

export default EntryDisplay;