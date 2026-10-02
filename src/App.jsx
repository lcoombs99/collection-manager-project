import './App.css';
import { useEffect, useState } from 'react';
import { INITIAL_DATA } from './constants.jsx';
import EntryList from './components/EntryList.jsx';
import Header from './components/Header.jsx';
import NewFoodForm from './components/NewFoodForm.jsx';

function App() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('foodJournal');
    return savedEntries ? JSON.parse(savedEntries) : INITIAL_DATA;
  });

  // preexisting useEffect....
  useEffect(() => {
    localStorage.setItem('foodJournal', JSON.stringify(entries));
  }, [entries]);

  const handleResetData = () => setEntries(INITIAL_DATA);

  const handleAddNewMeal = (meal) => {
    setFormIsOpen(false); // not sure why prevState => !prevState not working here specifically
    setEntries((prevEntries) => [meal, ...prevEntries]);
  };

  const handleUpdateMeal = (meal) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === meal.id ? meal : entry
      )
    );
  };

  const handleDeleteMealById = (id) => {
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  };

  const toggleFormState = () => {
    setFormIsOpen((prevState) => !prevState);
  };

  return (
    <div className="app-div">
      <Header onResetData={handleResetData}/>
      {!formIsOpen &&
        <button onClick={toggleFormState} className="button">Add New Entry</button>}
      {formIsOpen ?
        <NewFoodForm entryData={null} onCloseEdit={toggleFormState} handleAddNewMeal={handleAddNewMeal}/> : null}
      <EntryList entries={entries} handleDeleteMeal={handleDeleteMealById} handleUpdateMeal={handleUpdateMeal}/>
    </div>
  );
}

export default App;
