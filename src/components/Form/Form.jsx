import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";
import { Question } from "./FormContent/Question";

export const Form = () => {
  const [questionId, setQuestionId] = useState(1);

  const renderForm = questions.map(({ id, question, type, options }) => (
    <div key={id} className="question__container">
      {questionId === id && (
        <>
          {/* question container */}
          <Question id={id} question={question} />
          {/* input type */}
          {/* button */}
        </>
      )}
    </div>
  ));

  return <section className="form__wrapper">{renderForm}</section>;
};
