import "./Question.scss";

export const Question = ({ id, question, imgUrl }) => {
  return (
    <div className="question__header">
      <img src={imgUrl} alt="" />
      <div className="question-wrapper">
        <span className="q-id">{id}.</span>
        <p className="title">{question}</p>
      </div>
    </div>
  );
};
