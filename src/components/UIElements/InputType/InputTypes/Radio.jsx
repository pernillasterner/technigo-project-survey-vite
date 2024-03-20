import { useState } from "react";

export const Radio = ({ id, name, onInputChange, options }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    // Save value in state
    setValue(e.target.value);
    // Pass the value to parent function
    onInputChange(id, e.target.value);
  };

  return (
    <>
      {options &&
        options.map((option, index) => (
          <label key={index}>
            {option.option}
            <input
              type="radio"
              name={name}
              value={option.option}
              onChange={handleChange}
            />
          </label>
        ))}
    </>
  );
};
