export const InputType = ({
  updateFormData,
  value,
  questionId,
  placeholder,
  label,
}) => {
  const inputType = (e) => {
    updateFormData(questionId, e.target.value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={questionId}>Description of passing in a name.</label>
      <input
        id={questionId}
        type="text"
        className="f-input"
        placeholder={placeholder}
        value={value || ""}
        onChange={inputType}
      />
    </div>
  );
};
