import { useState } from "react";
import { InputType } from "./InputType";
// import { FavoriteColor } from "./FavoriteColor";

// Defining multi step component
export const MultiStepForm = ({ questions }) => {
  // State to store form data
  const [formData, setFormData] = useState({});

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };
  console.log(formData);
  return (
    <form className="form-body">
      <div className="form-title">
        <h1>🧊 Welcome to the IceBreaker Quiz 🧊</h1>
      </div>
      {/* Move this to component QuestionWrapper */}
      {/* First question using input field */}
      {questions.map((data, index) => (
        <div className="question-wrapper" key={index}>
          <div className="question">
            <div className="question-info">
              <span className="question-order">{data.id + 1}. </span>
              <div className="question-title-wrapper">
                <p>{data.question}</p>
              </div>
            </div>
            <div className="question-body">
              {data.type === "input" && (
                // H'r behöver jag skicka in
                <InputType
                  value={formData.id}
                  updateFormData={updateFormData}
                />
              )}
            </div>
          </div>
        </div>
      ))}

      <button type="submit">Send</button>
    </form>
  );
};
