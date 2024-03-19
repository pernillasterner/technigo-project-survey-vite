import "./Summery.scss";

export const Summery = ({ answers, questions }) => {
  return (
    <div className="summery-container">
      <div className="summery-answers">
        <h2>Thank for you!</h2>
        {answers &&
          Object.keys(answers).map((key) => <p key={key}>{answers[key]}</p>)}
      </div>
    </div>
  );
};
