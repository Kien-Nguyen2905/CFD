import React from "react";
const ControlNext = ({ onClick, type = "normal" }) => {
  return (
    <div className="control__next" onClick={onClick}>
      {type === "normal" ? (
        <img src="img/icon-btn-control.svg" alt="icon prev" />
      ) : (
        <svg
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 39L15 24L30 9"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default ControlNext;
