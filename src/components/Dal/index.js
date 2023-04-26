import React, { useState } from "react";
import DaysOfWeekDropdown from "./day";
import MealTypeDropDown from  "./meal";
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
};

const RecipoeModal = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [savedSelections, setSavedSelections] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };


  const handleMealTypeChange = (e) => {
    setSelectedMealType(e.target.value);
  };

 const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedDay && selectedMealType) {
      setSavedSelections([
        ...savedSelections,
        { day: selectedDay, mealType: selectedMealType },
      ]);
      setSelectedDay("");
      setSelectedMealType("");
    }
  };

  return (
    <div>
       <button onClick={openModal}>Add Recipe to Calendar</button> 
        <Modal isOpen={modalIsOpen}onRequestClose={closeModal} style={modalStyles}
        contentLabel="Example Modal">
          <form onSubmit={handleFormSubmit}>
            <label>
              <DaysOfWeekDropdown value={selectedDay} onChange={handleDayChange} />
          </label>
          <label>
            <MealTypeDropDown value={selectedMealType} onChange={handleMealTypeChange} />
          </label>
          <button type="submit">Add Meal</button>
          <button onClick={closeModal}>Close</button>
          </form>
        </Modal>
   </div>
  );
};

export default RecipoeModal;