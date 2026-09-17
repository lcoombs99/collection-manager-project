import FoodEntryDisplay from './FoodEntryDisplay.jsx';
import { useState } from 'react';

function FoodEntry({entryData, onDeleteMeal, handleSubmit}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleDeleteClick = () => {
    // TODO: Display modal rather than alert with option to confirm
    alert("This item will be deleted.");
    onDeleteMeal(entryData.id);
  };

  const handleClose = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <div className="card" key={entryData.id}>
      <FoodEntryDisplay
        entryData={entryData}
        onEditEntryClick={handleEditClick}
        onDeleteEntryClick={handleDeleteClick}
        onCloseEdit={handleClose}
        isEditing={isEditing}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default FoodEntry;