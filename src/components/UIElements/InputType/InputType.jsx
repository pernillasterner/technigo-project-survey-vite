import "./InputType.scss";
import { Text } from "./InputTypes/Text";
import { Radio } from "./InputTypes/Radio";
import { Select } from "./InputTypes/Select";
import { Button } from "../Button/Button";

export const InputType = ({ id, type, options, name, onInputChange, step }) => {
  console.log(type, options);

  const renderInputType = () => {
    switch (type) {
      case "text":
        console.log("Input component");
        return <Text id={id} name={name} onInputChange={onInputChange} />;
      case "radio":
        console.log("Radio component");
        return (
          <Radio
            id={id}
            name={name}
            onInputChange={onInputChange}
            options={options}
          />
        );
      case "select":
        console.log("Select component");
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
      <div className="options-container"> {renderInputType()}</div>

      {/* button */}
      <Button step={step} />
    </div>
  );
};
