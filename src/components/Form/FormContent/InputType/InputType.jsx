import "./InputType.scss";
import { Input } from "./InputTypes/Input";

export const InputType = ({ id, type, options, name, onInputChange }) => {
  console.log(type, options);

  const renderInputType = () => {
    switch (type) {
      case "input":
        console.log("Input component");
        return <Input id={id} name={name} onInputChange={onInputChange} />;
      case "radio":
        console.log("Radio component");
        break;
      case "select":
        console.log("Select component");
        break;
      default:
        return <div>Unsupported type</div>;
    }
  };

  return <div>{renderInputType()}</div>;
};
