export const FormBody = ({ questions }) => {
  console.log(questions);

  questions.map((data) => {
    console.log(data);
  });

  return (
    <div className="form-body">
      <div className="form-title">
        <h1>🧊 Welcome to the IceBreaker Quiz 🧊</h1>
      </div>
      {/* Move this to component QuestionWrapper */}
      {/* First question using input field */}
      <div className="question-wrapper">
        <div className="question">
          <div className="question-info">
            <span className="question-order">1. </span>
            <div className="question-title-wrapper">
              <p>What is your nickname?</p>
            </div>
          </div>
          <div className="question-body">
            <div className="input-field">
              <input
                id="id"
                className="f-input"
                placeholder="Nickname"
                type="name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
