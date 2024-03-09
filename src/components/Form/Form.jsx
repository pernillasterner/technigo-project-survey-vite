import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";
import { Question } from "./FormContent/Question/Question";
import { Button } from "./FormContent/Button/Button";
import { InputType } from "./FormContent/InputTypes/InputType";

export const Form = () => {
  const [questionId, setQuestionId] = useState(1);

  const renderForm = questions.map(({ id, question, type, options }) =>
    questionId === id ? (
      <div key={id} className="form__container">
        <>
          {/* question container */}
          <Question id={id} question={question} />
          {/* input type */}
          <InputType type={type} options={options} />
          {/* button */}
          {/* <Button id={id} /> */}
        </>
      </div>
    ) : null
  );

  return <section className="form__wrapper">{renderForm}</section>;
};
