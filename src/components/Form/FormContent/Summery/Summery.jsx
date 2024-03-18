import "./Summery.scss";

export const Summery = ({ answers }) => {
  console.log(answers);
  return (
    <div>
      {answers &&
        Object.keys(answers).map((key) => {
          <p id={key}>{answer[key]}</p>;
        })}
    </div>
  );
};
