/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { FormSelectProps } from "./types";

import "./style.css";

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label = "",
  array,
  state,
  setState,
}) => {
  const handleSetState = ({
    target,
  }: {
    target: { value: string | number };
  }) => {
    setState(target.value);
  };

  return (
    <div className="wrapperSelect">
      {label.length > 0 ? <label htmlFor={name}>{label}</label> : null}
      <select
        className="formSelect"
        onChange={handleSetState}
        value={state}
        name={name}
        id={name}
      >
        {array.map(({ name, code }) => (
          <option value={code} key={`${name} ${code}`}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
