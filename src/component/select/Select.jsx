import React from "react";
const Select = ({ options, label, ...props }) => {
  return (
    <>
      <label className="label">
        {label} {props.required && <span>*</span>}
      </label>
      <select
        className={`select form__input ${props.error ? "formerror" : ""}`}
        {...props}
      >
        {options?.length > 0 &&
          options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      <p className="error">{props.error}</p>
    </>
  );
};

export default Select;
