import React from "react";
import { useToggle } from "../../hooks/useToggle";
import AccordionDesc from "./AccordionDesc";
import AccordionTitle from "./AccordionTitle";
const AccordionItem = ({ content }) => {
  const sentences = content?.answer?.split(".").filter((item) => item !== "");
  const { toggle, handleToggle } = useToggle();
  return (
    <div className={`accordion__content ${toggle ? "active" : ""}`}>
      <AccordionTitle
        onClick={handleToggle}
        title={content?.title || content?.question}
      />
      <AccordionDesc desc={content?.description} text={sentences} />
    </div>
  );
};

export default AccordionItem;
