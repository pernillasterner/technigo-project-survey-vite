import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";
import { Question } from "./FormContent/Question/Question";
import { Button } from "./FormContent/Button/Button";
import { InputType } from "./FormContent/InputType/InputType";

export const Form = () => {
  const [questionId, setQuestionId] = useState(1);
  const [answers, setAnswers] = useState({});

  const onInputChange = (id, value) => {
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
  };

  // Pass form props and render the form
  const renderForm = questions.map(({ id, question, type, options, name }) =>
    questionId === id ? (
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
    ) : null
  );

  return <section className="form__wrapper">{renderForm}</section>;
};
