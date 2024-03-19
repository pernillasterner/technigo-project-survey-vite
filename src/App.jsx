import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { useState } from "react";

export const App = () => {
  const [step, setStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleButtonClick = () => {
    // Update step when button gets clicked on
    console.log("Testing button click in APP");

    setStep(step + 1);
  };
  console.log("STEPS IN APP " + step);
  return (
    <>
      {step === 0 ? (
        <Header step={step} onClick={handleButtonClick} />
      ) : (
        <Form step={step} setStep={setStep} onClick={handleButtonClick} />
      )}
    </>
  );
};
