import React from "react";
import { convertPrice } from "../../utils/covertPrice";
import { dateVn } from "../../utils/dateVn";

const ItemPayMent = ({ data }) => {
  return (
    <div className="itemhistory">
      <div className="name">{data?.course?.title}</div>
      <div className="payment">{data?.paymentMethod?.toUpperCase()}</div>
      <div className="date">{dateVn(data?.createdAt)}</div>
      <div className="money">{convertPrice(data?.course?.price, " VND")}</div>
    </div>
  );
};

export default ItemPayMent;
