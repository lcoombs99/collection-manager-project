import EntryDisplay from './EntryDisplay.jsx';
import { useState } from 'react';
import EntryEdit from './EntryEdit.jsx';

function EntryCard({entryData, onDeleteMeal, handleUpdateMeal}) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleFormState = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleDeleteClick = () => {
    // TODO: Display modal rather than alert with option to confirm
    alert('This item will be deleted.');
    onDeleteMeal(entryData.id);
  };

  return (
    <div>
      {
        isEditing ?
            <EntryEdit onCloseEdit={toggleFormState} handleUpdateMeal={handleUpdateMeal} entryData={entryData}/> :
          <EntryDisplay
            entryData={entryData}
            onEditEntryClick={toggleFormState}
            onDeleteEntryClick={handleDeleteClick}
          />
      }
    </div>
  );
}

export default EntryCard;