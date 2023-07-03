import React from "react";
import "../../asset/index.css";
const IntroduceDetail = ({ introducetion }) => {
  return (
    <div className="contentrow ctintro">
      <h3 className="contentrow__title title --t3">Giới thiệu</h3>
      <div className="contenteditor">
        <div dangerouslySetInnerHTML={{ __html: introducetion }} />
        <div className="videowrap">
          <iframe
            title="YouTube video player"
            src="https://www.youtube.com/embed/OXEWCTK4F2Y?rel=0"
            width={560}
            height={315}
            frameBorder={0}
            allowFullScreen="allowfullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroduceDetail;
