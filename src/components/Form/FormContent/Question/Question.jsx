import "./Question.scss";

export const Question = ({ id, question }) => {
  return (
    <div className="question__header">
      <span className="q-id">{id}.</span>
      <p className="title">{question}</p>
    </div>
  );
};
