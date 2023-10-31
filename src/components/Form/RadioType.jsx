import "./RadioType.scss";

export const RadioType = ({ updateFormData, value, questionId, options }) => {
  const radioType = (e) => {
    updateFormData(questionId, e.target.value);
  };

  return (
    <div className="radioWrapper">
      {options &&
        options.map((option) => (
          <div className="inputChoice" key={option.value}>
            <label className="i-radio">
              <input
                type="radio"
                checked={value === `${option.text}`}
                value={option.text}
                onChange={radioType}
              />
              <span className="radioButton">
                <i className="beforeRadio"></i>
              </span>
              <p className="labelItem">{option.text}</p>
            </label>
          </div>
        ))}
    </div>
  );
};
