import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";
import { Question } from "./FormContent/Question/Question";
import { Button } from "../UIElements/Button/Button";
import { InputType } from "../UIElements/InputType/InputType";
import { Summery } from "./FormContent/Summery/Summery";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [showSummery, setShowSummery] = useState(false);
  // Save all answers in object
  const [answers, setAnswers] = useState({});

  const onInputChange = (id, value) => {
    // I need to save the value in the answers object
    console.log(value);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
    // Move to next question
    setStep(step + 1);
  };

  console.log(answers);

  // Pass form props and render the form
  const renderForm = questions.map(({ id, question, type, options, name }) =>
    step === id ? (
      <form key={id} className="form__container" onSubmit={handleSubmit}>
        <>
          {/* question container */}
          <Question id={id} question={question} />
          {/* input type */}
          <InputType
            id={id}
            type={type}
            options={options}
            name={name}
            onInputChange={onInputChange}
          />
          {/* button */}
          <Button />
        </>
      </form>
    ) : step === questions.length ? (
      <Summery answers={answers} />
    ) : null
  );

  return <section className="form__wrapper">{renderForm}</section>;
};
