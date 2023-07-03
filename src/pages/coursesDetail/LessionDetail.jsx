import React from "react";
import Accordion from "../../component/accordion/Accordion";
import { lessionIndex } from "../../utils/lessionIndex";
const LessionDetail = ({ lession }) => {
  const { start, end } = lessionIndex(lession.name);
  return (
    <div className="contentrow ctlession">
      <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
      {lession.content?.length > 0 && (
        <Accordion amount={lession.content.slice(start, end)} />
      )}
    </div>
  );
};

export default LessionDetail;
