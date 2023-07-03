import React from "react";

const RequestDetail = ({ request }) => {
  return (
    <div className="contentrow ctrequest">
      <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
      <div className="ctrequest__content">
        {request?.length > 0 &&
          request.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

export default RequestDetail;
