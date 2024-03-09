export const Question = ({ id, question }) => {
  return (
    <div className="question__header">
      <span className="id">{id}.</span>
      <p className="title">{question}</p>
    </div>
  );
};
