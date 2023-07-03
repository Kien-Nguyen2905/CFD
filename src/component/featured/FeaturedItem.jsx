import React from "react";

const FeaturedItem = ({ data }) => {
  return (
    <div className="featured__content-item">
      <h3 className="title --t3 --white">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default FeaturedItem;
