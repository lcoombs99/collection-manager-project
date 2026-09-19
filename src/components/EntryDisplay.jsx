function EntryDisplay({entryData, onEditEntryClick, onDeleteEntryClick}) {
// props: entryData, onEditEntryClick, onDeleteEntryClick

  const dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric"
  }

  const formattedDate = new Date(entryData.date).toLocaleDateString('en-US', dateOptions);
  const formattedTime = new Date(entryData.date).toLocaleTimeString('en-US', timeOptions);

  return (
    <div className="card">
      <div className="entry">{formattedDate} <strong>{formattedTime}</strong></div>
      <div className="entry entry-meal">{entryData.meal}</div>
      <h4>{entryData.food}</h4>
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