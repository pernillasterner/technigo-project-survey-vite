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
    <div className="input-field">
      <label>{label}</label>
      <input
        // id="id"
        type="text"
        className="f-input"
        placeholder={placeholder}
        value={value || ""}
        onChange={inputType}
      />
    </div>
  );
};
