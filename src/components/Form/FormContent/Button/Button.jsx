import { useState } from "react";
import "./Button.scss";

// Need to add an eventlistener to button. Go to next question
export const Button = () => {
  // Set useState on the classname of the button
  const [buttonState, setButtonState] = useState("default");
  // Get id as prop and pass

  return <button className={buttonState}>Submit your answer</button>;
};
