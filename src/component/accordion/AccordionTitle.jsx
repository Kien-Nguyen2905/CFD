import React from "react";

const AccordionTitle = ({ title, onClick }) => {
  return (
    <div className="accordion__content-title" onClick={onClick}>
      <h4>
        <strong>{title}</strong>
      </h4>
    </div>
  );
};

export default AccordionTitle;
