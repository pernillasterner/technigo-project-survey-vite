import { useState } from "react";
import { InputType } from "./InputType";
// import { FavoriteColor } from "./FavoriteColor";

// Defining multi step component
export const MultiStepForm = ({ questions }) => {
  // State to store form data in an object
  const [formData, setFormData] = useState({});
  // State to check current step and set default values to 0
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);

    console.log("next step");
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);

    console.log("prev step");
  };

  // Get the current question based on the current step
  const currentQuestion = questions[currentStep];
  console.log(currentQuestion);

  return (
    <form className="form-body">
      <div className="form-title">
        <h1>🧊 Welcome to the IceBreaker Quiz 🧊</h1>
      </div>
      {/* Move this to component QuestionWrapper */}
      {/* First question using input field */}

      <div className="question-wrapper">
        <div className="question">
          <div className="question-info">
            <span className="question-order">{currentQuestion.id + 1}. </span>
            <div className="question-title-wrapper">
              <p>{currentQuestion.question}</p>
            </div>
          </div>
          <div className="question-body">
            {currentQuestion.type === "input" && (
              // Här behöver jag skicka in
              <InputType
                value={formData[currentQuestion.id]}
                updateFormData={(value) =>
                  updateFormData(currentQuestion.id, value)
                }
              />
            )}
          </div>
        </div>
      </div>

      <div className="button-wrapper">
        {/* if currenstep is bigger than 0 then show button*/}
        {currentStep > 0 && <button onClick={handlePrevStep}>Previous</button>}
        {currentStep < questions.length - 1 && (
          <button onClick={handleNextStep}>Next</button>
        )}
      </div>
      {currentStep === questions.length - 1 && (
        <button type="submit">Send</button>
      )}
    </form>
  );
};
