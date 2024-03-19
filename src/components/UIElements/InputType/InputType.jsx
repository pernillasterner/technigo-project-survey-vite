import "./InputType.scss";
import { Text } from "./InputTypes/Text";
import { Radio } from "./InputTypes/Radio";
import { Select } from "./InputTypes/Select";
import { Button } from "../Button/Button";

export const InputType = ({
  id,
  type,
  options,
  name,
  onInputChange,
  step,
  errorMessage,
  handleNextStep,
}) => {
  const renderInputType = () => {
    switch (type) {
      case "text":
        return <Text id={id} name={name} onInputChange={onInputChange} />;
      case "radio":
        return (
          <Radio
            id={id}
            name={name}
            onInputChange={onInputChange}
            options={options}
          />
        );
      case "select":
        return (
          <Select
            id={id}
            name={name}
            onInputChange={onInputChange}
            options={options}
          />
        );
      default:
        return <div>Unsupported type</div>;
    }
  };

  return (
    <div className="options-wrapper">
      <div className="options-container">{renderInputType()}</div>
      <Button step={step} onClick={handleNextStep} />
      {errorMessage && (
        <p>Oops, you need to answer the question before moving on.</p>
      )}
    </div>
  );
};
