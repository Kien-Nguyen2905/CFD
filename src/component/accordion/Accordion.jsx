import React from "react";
import AccordionItem from "./AccordionItem";
const Accordion = ({ amount, children }) => {
  return (
    <div className="accordion">
      {children && <h3 className="accordion__title label">{children}</h3>}
      {amount?.map((item, index) => (
        <AccordionItem content={item} key={index} />
      ))}
    </div>
  );
};

export default Accordion;
