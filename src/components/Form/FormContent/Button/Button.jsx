import { useState } from "react";
import "./Button.scss";

// Need to add an eventlistener to button. Go to next question
export const Button = (id) => {
  // Set useState on the classname of the button
  const [buttonState, setButtonState] = useState("default");
  // Get id as prop and pass
  console.log(id);
  const handleSubmit = () => {
    console.log("Manipulate the id with + 1");
    // Change the state of the button class
    // All the inputfields are ok then go to next step
  };

  return (
    <button className={buttonState} onClick={() => handleSubmit(id)}>
      Submit your answer
    </button>
  );
};
