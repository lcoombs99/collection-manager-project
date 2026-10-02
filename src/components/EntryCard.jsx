import EntryDisplay from './EntryDisplay.jsx';
import { useState } from 'react';
import EntryEdit from './EntryEdit.jsx';

function EntryCard({entryData, handleDeleteMeal, handleUpdateMeal}) {
  // props: entryData, handleDeleteMeal, handleUpdateMeal

  const [isEditing, setIsEditing] = useState(false);

  const toggleFormState = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleDeleteClick = () => {
    handleDeleteMeal(entryData.id);
  };

  return (
    <div className="card">
      {
        isEditing ?
          <EntryEdit
            onCloseEdit={toggleFormState}
            handleUpdateMeal={handleUpdateMeal}
            entryData={entryData}
          /> :
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