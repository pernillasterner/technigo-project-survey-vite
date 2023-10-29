import { useState } from "react";
import { InputType } from "./InputType";
import { RadioType } from "./RadioType";
import { DropdownType } from "./DropdownType";

export const MultiStepForm = ({ questions }) => {
  // State to store form data in an object
  const [formData, setFormData] = useState({});
  // State to check current step and set default values to 0
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  /** Handle Next and Previous Buttons */
  const handleNextStep = () => {
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
    setSelectedValue("");
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    setSelectedValue("");
  };

  // Get the current question based on the current step
  const currentQuestion = questions[currentStep];

  return (
    <div className="form-body">
      <div className="form-title">
        <h1>🧊 Welcome to the IceBreaker Quiz 🧊</h1>
      </div>
      <form className="question-wrapper">
        <div className="question">
          <div className="question-info">
            <span className="question-order">{currentQuestion.id + 1}. </span>
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
            )}
            {currentQuestion.type === "radio" && (
              <RadioType
                value={formData[currentQuestion.id]}
                updateFormData={updateFormData}
                questionId={currentQuestion.id}
                options={currentQuestion.options}
              />
            )}
            {currentQuestion.type === "dropdown" && (
              <DropdownType
                value={formData[currentQuestion.id]}
                updateFormData={updateFormData}
                questionId={currentQuestion.id}
                placeholder={currentQuestion.placeholder}
                options={currentQuestion.options}
                setSelectedValue={setSelectedValue}
                selectedValue={selectedValue}
              />
            )}
          </div>
        </div>
      </form>

      <div className="button-wrapper">
        {(currentQuestion.hasSubquestions || currentStep > 0) && (
          <button onClick={handlePrevStep}>Previous</button>
        )}

        {(currentQuestion.hasSubquestions ||
          currentStep < questions.length - 1) && (
          <button onClick={handleNextStep}>Next</button>
        )}

        {!currentQuestion.hasSubquestions &&
          currentStep === questions.length - 1 && (
            <button type="submit">Send</button>
          )}
      </div>
    </div>
  );
};
