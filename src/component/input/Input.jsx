import React, { forwardRef } from "react";

const Input = forwardRef(({ label, renderProp, required, ...props }, ref) => {
  return (
    <>
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderProp ? (
        renderProp(props)
      ) : (
        <input
          ref={ref}
          {...props}
          className={`form__input ${props.error ? "formerror" : ""} `}
        />
      )}
      <p className="error">{props.error}</p>
    </>
  );
});

export default Input;
