import { useState } from 'react';
import Modal from './Modal.jsx';

function EntryDisplay({entryData, onEditEntryClick, onDeleteEntryClick}) {
// props: entryData, onEditEntryClick, onDeleteEntryClick
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalState = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric'
  };

  const formattedDate = new Date(entryData.date)
    .toLocaleDateString('en-US', dateOptions);

  const formattedTime = new Date(`1970-01-01T${entryData.time}`)
    .toLocaleTimeString('en-US', timeOptions);

  return (
    <>
      {isModalOpen ? <Modal onCancel={toggleModalState} onConfirm={onDeleteEntryClick}/> : null}
      <div className="entry-display">
        <div className="entry">{formattedDate} <strong>{formattedTime}</strong></div>
        <div className="entry entry-meal">{entryData.meal}</div>
        <h4>{entryData.food}</h4>
        <div className="notes">
          <strong>Notes</strong>
          <p>{entryData.notes}</p>
        </div>
        {entryData && entryData.reactions?.length > 0 ?
          <ul className="list">
            {entryData.reactions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> : null
        }
        <div className="card-actions">
          <button className="button" onClick={onEditEntryClick}>Edit</button>
          <button className="button" onClick={toggleModalState}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default EntryDisplay;