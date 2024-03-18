import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { useState } from "react";

export const App = () => {
  const [step, setStep] = useState(0);

  const handleButtonClick = () => {
    // Update step when button gets clicked on
    setStep(step + 1);
  };

  return (
    <>
      {step === 0 ? (
        <Header step={step} onClick={handleButtonClick} />
      ) : (
        <Form step={step} />
      )}
    </>
  );
};
