import React from "react";
import { CheckboxProps } from "./types";
import "./style.css";

const CheckboxInput: React.FC<CheckboxProps> = ({
  name,
  checked,
  handleToggle,
  disabled = false,
  error = false,
  title = "",
  description = "",
}): JSX.Element => {
  return (
    <div className="checkboxContainer" onClick={handleToggle}>
      <input
        type="checkbox"
        id={name}
        onChange={handleToggle}
        checked={checked}
      />
      {title !== null && title.length > 0 ? (
        <div>
          <p className="checkboxTitle">{title}</p>
          {description.length > 0 ? (
            <p className="checkboxDescription">{description}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default CheckboxInput;
