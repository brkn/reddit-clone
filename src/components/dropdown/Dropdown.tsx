/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Dropdown.scss";

import React, { useState } from "react";

interface DropdownProps<T extends string> {
  label?: string;
  selectedOption: T;
  options: readonly T[];
  handleSelect: React.Dispatch<React.SetStateAction<T>>;
}

export function Dropdown<T extends string>({
  label,
  selectedOption,
  options,
  handleSelect,
}: DropdownProps<T>) {
  const [
    isDropdownVisible,
    setIsDropdownVisible
  ] = useState(false);

  const wrapperClassName = "dropdown-wrapper";
  const buttonClassName = isDropdownVisible
    ? "dropdown-button"
    : "dropdown-button visible";

  return (
    <div className={wrapperClassName}>
      <p
        id={"dropdown-label"}
        className={"dropdown-label"}
      >
        {label}
      </p>

      <div className={"dropdown-list-wrapper"}>
        <button
          id={"dropdown-button"}
          className={buttonClassName}
          aria-haspopup={"listbox"}
          aria-expanded={isDropdownVisible}
          aria-labelledby={"dropdown-label"}
          onClick={toggleDropdown}
        >
          {selectedOption}
        </button>

        {isDropdownVisible && (
          <ul
            id={"dropdown-list"}
            className={"dropdown-list"}
            role={"listbox"}
            aria-labelledby={"dropdown-label"}
          >
            {options.map((option, index) => (
              <li
                key={option}
                id={`dropdown-item-${index}`}
                className={"dropdown-item"}
                role={"option"}
                aria-selected={selectedOption === option}
                onClick={() => handleChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  function handleChange(option: T) {
    toggleDropdown();
    handleSelect(option);
  }
}
