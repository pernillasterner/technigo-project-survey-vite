export const RadioType = ({
  updateFormData,
  value,
  questionId,
  label,
  options,
}) => {
  const radioType = (e) => {
    updateFormData(questionId, e.target.value);
  };

  console.log(options);
  return (
    <div className="radio-wrapper">
      {options &&
        options.map((option) => (
          <div className="input-choice" key={option.value}>
            <label className="i-radio">
              <input
                type="radio"
                checked={value === `${option.text}`}
                value={option.text}
                onChange={radioType}
              />
              <span className="radio-button">
                <i className="before-radio"></i>
              </span>
              <p className="label-item">{option.text}</p>
            </label>
          </div>
        ))}
    </div>
  );
};
