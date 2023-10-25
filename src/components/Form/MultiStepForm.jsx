import { useState } from "react";
import { InputType } from "./InputType";

export const MultiStepForm = ({ questions }) => {
  // State to store form data in an object
  const [formData, setFormData] = useState({});
  // State to check current step and set default values to 0
  const [currentStep, setCurrentStep] = useState(0);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  const handleNextStep = () => {
    console.log("Before Next Step:", currentStep);
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
    console.log("After Next Step:", currentStep);
  };

  const handlePrevStep = () => {
    console.log("Before Prev Step:", currentStep);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    console.log("After Prev Step:", currentStep);
  };

  // Get the current question based on the current step
  console.log("Current Step:", currentStep);
  const currentQuestion = questions[currentStep];

  return (
    <div className="form-body">
      <div className="form-title">
        <h1>🧊 Welcome to the IceBreaker Quiz 🧊</h1>
      </div>
      <div className="question-wrapper">
        <div className="question">
          <div className="question-info">
            <span className="question-order">{currentQuestion.id + 1} </span>
            <div className="question-title-wrapper">
              <p>{currentQuestion.label}</p>
            </div>
          </div>

          <div className="question-body">
            {currentQuestion.type === "input" && (
              <InputType
                value={formData[currentQuestion.id]}
                updateFormData={updateFormData}
                questionId={currentQuestion.id}
                placeholder={currentQuestion.placeholder}
                label={currentQuestion.label}
              />

              // <InputType
              //   value={formData.value}s
              //   updateFormData={updateFormData}
              //   // questionId={currentQuestion.id}
              // />
            )}
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        {currentStep > 0 && <button onClick={handlePrevStep}>Previous</button>}

        {currentStep < questions.length - 1 && (
          <button onClick={handleNextStep}>Next</button>
        )}
      </div>
      {currentStep === questions.length - 1 && (
        <button type="submit">Send</button>
      )}
    </div>
  );
};
