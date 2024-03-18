import { useState } from "react";

export const Select = ({ id, name, onInputChange, options }) => {
  const [value, setValue] = useState("");
  console.log(options, name);

  const handleChange = (e) => {
    // Save value in state
    setValue(e.target.value);
    console.log(e.target.value);
    // Pass the value to parent function
    onInputChange(id, e.target.value);
  };

  return (
    <select name={name} value={value} onChange={handleChange}>
      {options &&
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
};
