import "./InputType.scss";
import { Input } from "./InputTypes/Input";
import { Radio } from "./InputTypes/Radio";
import { Select } from "./InputTypes/Select";

export const InputType = ({ id, type, options, name, onInputChange }) => {
  console.log(type, options);

  const renderInputType = () => {
    switch (type) {
      case "input":
        console.log("Input component");
        return <Input id={id} name={name} onInputChange={onInputChange} />;
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

  return <div>{renderInputType()}</div>;
};
