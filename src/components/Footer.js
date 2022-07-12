import React from "react";

function Footer() {
  return (
    <div
      className="container d-flex justify-content-center flex-column text-center"
      style={{ width: "100vw" }}
    >
      <h2>Follow Us</h2>
      <div className="Sociallinks ">
        <i className="fab fa-instagram mx-2"></i>
        <i className="fab fa-facebook mx-2"></i>
        <i className="fab fa-linkedin mx-2"></i>
        <i className="fab fa-whatsapp mx-2"></i>
      </div>
    </div>
  );
}

export default Footer;
