import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";
import { Question } from "./FormContent/Question/Question";
import { InputType } from "../UIElements/InputType/InputType";
import { Summery } from "./FormContent/Summery/Summery";

export const Form = ({ step, onClick, setStep }) => {
  // Save all answers in object
  const [errorMessage, setErrorMessage] = useState(false);
  const [answers, setAnswers] = useState({});
  const [statusValue, setStatusValue] = useState("");

  // Function that handles incoming input
  const onInputChange = (id, value) => {
    // Set states for err message and incomming target value
    setErrorMessage(false);
    setStatusValue(value);

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
    setErrorMessage(false);
  };

  // Function that will add step when clicking on button
  const handleNextStep = (e) => {
    e.preventDefault();

    if (statusValue !== "") {
      setStep(step + 1);
      setErrorMessage(false);
      setStatusValue("");
    } else {
      setErrorMessage(true);
    }
  };

  // Pass form props and render the form
  const renderForm = questions.map(
    ({ id, question, type, options, name, imgUrl }) =>
      step === id ? (
        <form key={id} className="form__container">
          <>
            {/* questions */}
            <Question id={id} question={question} imgUrl={imgUrl} />

            {/* input type */}
            <InputType
              id={id}
              type={type}
              options={options}
              name={name}
              onInputChange={onInputChange}
              step={step}
              onClick={onClick}
              errorMessage={errorMessage}
              setStep={setStep}
              handleNextStep={handleNextStep}
            />
          </>
        </form>
      ) : null
  );

  // Only show summery if this condition is true
  const showSummery = Object.keys(answers).length === questions.length;

  return (
    <section className="section__wrapper">
      {showSummery ? (
        <Summery answers={answers} questions={questions} />
      ) : (
        renderForm
      )}
    </section>
  );
};
