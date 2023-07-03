import React from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedContent = ({ amount }) => {
  return (
    <div className="featured__content">
      {amount?.length > 0 &&
        amount?.map((item, index) => <FeaturedItem key={index} data={item} />)}
    </div>
  );
};

export default FeaturedContent;
