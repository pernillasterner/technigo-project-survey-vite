import { useState } from "react";

export const DropdownType = ({
  updateFormData,
  value,
  questionId,
  label,
  options,
}) => {
  const dropdownType = (e) => {
    updateFormData(questionId, e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownOpen = (e) => {
    setIsOpen(!isOpen);
  };

  console.log(options);
  return (
    <div className="dropdownWrapper">
      <div
        className={`selectWrapper ${isOpen ? "up" : ""}`}
        onClick={handleDropdownOpen}
      >
        <div className="inputWrapper">
          <div className="clickLayer"></div>
          <input className="f-select" type="text" />
          <i className="i-icon">
            <svg></svg>
          </i>
        </div>
        {isOpen && (
          <ul className="optionWrapper">
            <div className="optionWrapperLayout">
              <li className="option">
                <span>Test</span>
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};
