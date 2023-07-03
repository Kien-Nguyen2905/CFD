import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useState } from "react";
import Flickity from "react-flickity-component";
const TestimonialItem = forwardRef(({ data }, ref) => {
  const flickityRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  useImperativeHandle(ref, () => ({
    previous: () => {
      flickityRef.current?.previous();
    },
    next: () => {
      flickityRef.current?.next();
    },
  }));
  return (
    <>
      <div className="text">
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              className={`ct ct-${index + 1} ${
                index === textIndex ? "active" : ""
              }`}
              key={index}
            >
              <div className="info">
                <div className="name">
                  <h4 className="title --t3 --white">{item?.name}</h4>
                </div>
              </div>
              <div className="content">{item?.description}</div>
              <div className="bottom">
                <span className="label">{item?.tag}</span>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src="img/facebook.svg" alt="" />
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className="images">
        <Flickity
          options={{
            cellAlign: "center",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            dragThreshold: 0,
            wrapAround: true,
            lazyLoad: true,
            on: {
              change: (index) => setTextIndex(index),
            },
          }}
          flickityRef={(ref) => (flickityRef.current = ref)}
          className="list"
        >
          {data.length > 0 &&
            data.map((item, index) => (
              <div className="carousel-cell" key={index}>
                <div className="img">
                  <picture>
                    <source media="(max-width: 767px)" srcSet={item?.image} />
                    <img data-flickity-lazyload={item?.image} alt="" />
                  </picture>
                </div>
                <div className="ct_m">
                  <div className="info">
                    <div className="name">
                      <h4 className="title --t3 --white">{item?.name}</h4>
                    </div>
                  </div>
                  <div className="content">{item?.description}</div>
                  <div className="bottom">
                    <span className="label">{item?.tag}</span>
                    <a href="https://www.facebook.com/" target="_blank">
                      <img src="img/facebook.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </Flickity>
      </div>
    </>
  );
});

export default TestimonialItem;
