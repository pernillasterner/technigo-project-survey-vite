import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";
import { Question } from "./FormContent/Question/Question";
import { Button } from "../UIElements/Button/Button";
import { InputType } from "../UIElements/InputType/InputType";
import { Summery } from "./FormContent/Summery/Summery";

export const Form = ({ step }) => {
  // Save all answers in object
  const [answers, setAnswers] = useState({});

  const onInputChange = (id, value) => {
    // I need to save the value in the answers object
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Move to next question
    setStep(step + 1);
  };

  // Pass form props and render the form
  const renderForm = questions.map(
    ({ id, question, type, options, name, imgUrl }) =>
      step === id ? (
        <form key={id} className="form__container" onSubmit={handleSubmit}>
          <>
            {/* question container */}
            <Question id={id} question={question} imgUrl={imgUrl} />

            {/* input type */}
            <InputType
              id={id}
              type={type}
              options={options}
              name={name}
              onInputChange={onInputChange}
              step={step}
            />
          </>
        </form>
      ) : null
  );

  // Only show summery if this condition is true
  const showSummery = Object.keys(answers).length === questions.length;

  return (
    <section className="section__wrapper">
      {showSummery ? <Summery answers={answers} /> : renderForm}
    </section>
  );
};
