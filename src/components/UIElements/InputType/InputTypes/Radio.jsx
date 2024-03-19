import { useState } from "react";

export const Radio = ({ id, name, onInputChange, options }) => {
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
