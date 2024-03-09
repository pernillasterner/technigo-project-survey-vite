import "./Form.scss";
import { useState } from "react";
import { questions } from "../../data/questions.json";

export const Form = () => {
  const [questionId, setQuestionId] = useState(1);

  const renderForm = questions.map(({ id, question, type, options }) => (
    <div key={id} className="question__container">
      {questionId === id && (
        <>
          <p>{question}</p>
        </>
      )}
    </div>
  ));

  return <section className="form__container">{renderForm}</section>;
};
