import React from "react";

const AccordionDesc = ({ desc, text }) => {
  return (
    <>
      {!text ? (
        <div className="accordion__content-text --transparent">
          {desc?.length > 0 &&
            desc?.map((item, index) => (
              <div className="item --lock" key={index}>
                <p>
                  <i>
                    <img
                      src="https://cfdcircle.vn/img/iconlock.svg"
                      alt="CFD Circle"
                    />
                  </i>
                  <span>{item}</span>
                </p>
              </div>
            ))}
        </div>
      ) : (
        <div className="accordion__content-text">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              gap: "28px",
            }}
          >
            {text?.length > 0 &&
              text?.map((item, index) => (
                <p key={index}>
                  {item} <br />
                </p>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AccordionDesc;
