import "./Summery.scss";

export const Summery = ({ answers }) => {
  console.log("detta är summery");
  console.log(answers);
  return (
    <div>
      {answers &&
        Object.keys(answers).map((key) => (

          <p key={key}>{answers[key]}</p>
        ))}
    </div>
  );
};
