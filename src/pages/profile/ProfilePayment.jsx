import React from "react";
import { useEffect } from "react";
import { useAuThen } from "../../component/authenContext/authenContext";
import ItemPayMent from "./ItemPayMent";
const ProfilePayment = () => {
  const { payment } = useAuThen();
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {payment?.length > 0 &&
        payment?.map((item, index) => <ItemPayMent key={index} data={item} />)}
    </div>
  );
};

export default ProfilePayment;
