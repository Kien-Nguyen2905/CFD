import React, { forwardRef } from "react";
import { useImperativeHandle } from "react";
import TeacherItem from "./TeacherItem";
import Flickity from "react-flickity-component";
import { useRef } from "react";
const TeacherList = forwardRef(({ teacher }, ref) => {
  const flickityRef = useRef(null);
  useImperativeHandle(ref, () => ({
    previous: () => {
      flickityRef.current?.previous();
    },
    next: () => {
      flickityRef.current?.next();
    },
  }));
  return (
    <div className="teacher__list">
      <div className="container">
        <Flickity
          options={{
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            dragThreshold: 0,
          }}
          flickityRef={(ref) => (flickityRef.current = ref)}
          className="teacher__list-inner"
        >
          {teacher.teams?.length > 0 &&
            teacher.teams?.map((item, index) => (
              <TeacherItem key={index} data={item} />
            ))}
        </Flickity>
      </div>
    </div>
  );
});

export default TeacherList;
