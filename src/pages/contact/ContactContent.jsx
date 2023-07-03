import React from "react";
import Form from "../../component/form/Form";
import SidebarContact from "./SidebarContact";
const ContactContent = () => {
  return (
    <div className="contact__content">
      <div className="container">
        <div className="wrapper">
          <SidebarContact />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
