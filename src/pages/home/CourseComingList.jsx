import React, { useRef, useImperativeHandle, forwardRef } from "react";
import CourseComingItem from "./CourseComingItem";
import Flickity from "react-flickity-component";
const CourseComingList = forwardRef(({ data }, ref) => {
  let flicRef = useRef(null);
  useImperativeHandle(ref, () => ({
    previous: () => {
      flicRef.current?.previous();
    },
    next: () => {
      flicRef.current?.next();
    },
  }));
  return (
    <Flickity
      options={{
        cellAlign: "center",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        dragThreshold: 0,
        wrapAround: true,
      }}
      flickityRef={(ref) => (flicRef.current = ref)}
      className="coursecoming__list"
    >
      {data?.map((item, index) => (
        <CourseComingItem data={item} key={index} />
      ))}
    </Flickity>
  );
});

export default CourseComingList;
