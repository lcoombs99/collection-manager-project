import './App.css';
import { useEffect, useState } from 'react';
import { INITIAL_DATA } from './constants.jsx';
import JournalEntryList from './components/JournalEntryList.jsx';
import Header from './components/Header.jsx';
import NewFoodForm from './components/NewFoodForm.jsx';

function App() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [entries, setEntries] = useState(() => {
    // saving entries to local storage so they persist. Maybe only for development
    const savedEntries = localStorage.getItem('foodJournal');
    return savedEntries
      ? JSON.parse(savedEntries)
      : INITIAL_DATA;
  });

  // useEffect: refresh when entry added
  useEffect(() => {
    localStorage.setItem('foodJournal', JSON.stringify(entries));
  }, [entries]);

  // resetToInitialData: DEVELOPMENT reset to initial data in case of error
  const resetToInitialData = () => setEntries(INITIAL_DATA);

  // handleAddNewMeal: Add new meal to list
  const handleAddNewMeal = (meal) => {
    setFormIsOpen((prevState) => !prevState);
    setEntries((prevEntries) => [meal, ...prevEntries]);
  };

  // handleUpdateMeal: find and update the existing meal (by id)
  const handleUpdateMeal = (meal) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === meal.id ? meal : entry
      )
    );
  };

  // handleDeleteMealById: find and delete specific meal from list
  const handleDeleteMealById = (id) => {
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  };

  // handleOpenForm: open form to enter New Entry
  const toggleFormState = () => {
    console.log("Close");
    setFormIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Header onResetData={resetToInitialData}/>
      {/*Filter or search bar*/}

      {!formIsOpen &&
        <button onClick={toggleFormState} className="button">Add New Entry</button>
      }

      {/* Add New Food form - display conditionally */}
      {formIsOpen ? <NewFoodForm data={null} onCloseEdit={toggleFormState} handleSubmit={handleAddNewMeal}/> : null}

      {/* Entry List */}
      <h3>Food Log</h3>
      <JournalEntryList entries={entries} onDeleteMeal={handleDeleteMealById} handleSubmit={handleUpdateMeal}/>
    </>
  );
}

export default App;
