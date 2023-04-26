import React from "react";

const MealTypeDropDown = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Select Meal Type</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select>
  );
};

export default MealTypeDropDown;