import { useState } from "react";
import "./DropdownType.scss";

export const DropdownType = ({
  updateFormData,
  value,
  questionId,
  placeholder,
  options,
  setSelectedValue,
  selectedValue,
}) => {
  // const [selectedValue, setSelectedValue] = useState("");

  const dropdownType = (selectedValue) => {
    updateFormData(questionId, selectedValue);
    setSelectedValue(selectedValue);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdownWrapper">
      <div
        className={`selectWrapper ${isOpen ? "up" : ""}`}
        onClick={handleDropdownOpen}
      >
        <div className="inputWrapper">
          <div className="clickLayer"></div>
          <label>
            <input
              className="f-select"
              type="text"
              placeholder={selectedValue || placeholder}
            />
          </label>
          <i className="i-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L18.7071 11.7071C19.0976 11.3166 19.0976 10.6834 18.7071 10.2929C18.3166 9.90237 17.6834 9.90237 17.2929 10.2929L12 15.5858Z"
                fill="#000000"
              />
            </svg>
          </i>
        </div>
        {isOpen && (
          <ul className="optionWrapper">
            <div className="optionWrapperLayout">
              {options &&
                options.map((option, index) => (
                  <li className="option" key={option.text || option}>
                    <span onClick={() => dropdownType(option.text || option)}>
                      {option.text || option}
                    </span>
                  </li>
                ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};
