export const InputType = ({ updateFormData, value }) => {
  const inputType = (e) => updateFormData("id", e.target.value);

  return (
    <div className="input-field">
      <label>Nickname:</label>
      <input
        id="id"
        type="text"
        className="f-input"
        placeholder="Nickname"
        value={value}
        onChange={inputType}
      />
    </div>
  );
};
