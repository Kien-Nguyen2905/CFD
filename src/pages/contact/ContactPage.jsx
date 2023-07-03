import React from "react";
import ContactContent from "./ContactContent";
import ContactTitle from "./ContactTitle";
const Contact = () => {
  return (
    <main className="mainwrapper contact --ptop">
      <ContactTitle />
      <ContactContent />
    </main>
  );
};

export default Contact;
