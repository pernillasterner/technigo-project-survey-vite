import { useState } from "react";

export const Text = ({ id, name, onInputChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    // Save value in state
    setValue(e.target.value);
    // Pass the value to parent function
    onInputChange(id, e.target.value);
  };

  return (
    <input type="text" name={name} value={value} onChange={handleChange} />
  );
};
