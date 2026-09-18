function EntryDisplay({entryData, onEditEntryClick, onDeleteEntryClick}) {
// props: entryData, onEditEntryClick, onDeleteEntryClick

  return (
    <div>
      <div className="entry">{entryData.date} {entryData.time}</div>
      <div className="entry">{entryData.meal}</div>
      <div className="entry">Notes: {entryData.notes ?? null}</div>
      <ul className="list">
        {
          entryData.reactions.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <button className="button" onClick={onEditEntryClick}>Edit</button>
      <button className="button" onClick={onDeleteEntryClick}>Delete</button>
    </div>
  );
}

export default EntryDisplay;