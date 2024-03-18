import { useState, useEffect } from "react";
import "./Button.scss";

// Need to add an eventlistener to button. Go to next question
export const Button = ({ step, onClick }) => {
  // Set useState on the classname of the button
  const [buttonState, setButtonState] = useState("default");
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    switch (step) {
      case 0:
        setButtonText("Let's go!");
        break;
      case 1:
        setButtonText("Next question");
        break;
      default:
        // Set default button text here
        setButtonText("Continue");
        break;
    }
  }, [step]);

  return (
    <button className={buttonState} onClick={onClick}>
      {buttonText}
    </button>
  );
};
