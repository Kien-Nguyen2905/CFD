import React from "react";
import { Link } from "react-router-dom";
const Button = ({
  onClick,
  children,
  isLoading,
  className = "",
  to,
  type = "button",
  disabled,
  Buttontype = "primary",
}) => {
  return (
    <>
      {!to ? (
        <button
          className={`btn ${
            Buttontype === "primary" ? "btn--primary" : "btn--border --black"
          } ${disabled ? "--disable" : ""} ${
            isLoading ? "--processing" : ""
          } ${className}`}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <Link
          to={to}
          className={`btn ${
            Buttontype === "primary" ? "btn--primary" : "btn--border --black"
          }  ${className}`}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
