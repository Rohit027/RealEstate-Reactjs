import { React, useState } from "react";
import vid from "../video/video1.mp4";

function SectionThree() {
  // const [name, setName] = useState("");
  // const[email, setEmail] = useState("");
  // const[phoneNo, setPhoneNo] = useState("");
  // const[details, setDetails] = useState("");

  // const inputEvent = (e) =>{
  //     setName(e.target.value);
  // }
  // const inputEventEmail = (e) =>{
  //     setEmail(e.target.value);
  // }
  // const inputEventPhoneNo = (e) => {
  //     setPhoneNo(e.target.value);
  // }
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setDetails((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert(
      `Name: ${details.name}\nEmail: ${details.email}\nPhone Number: ${details.phoneNo}\nMessage: ${details.message}`
    );
  };
  return (
    <section className="container mx-auto section__three" id="contact">
      <div className="section__video">
        <video src={vid} loop={true} autoPlay={true} muted={true} />
      </div>
      <div className="section__description">
        <h1>Contact Us</h1>
        <form onSubmit={onSubmits} className="contact__form-container">
          <div className="container contact__form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Full name"
                name="name"
                onChange={inputEvent}
                value={details.name}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                name="email"
                onChange={inputEvent}
                value={details.email}
              />
            </div>
            <div className="mb-3">
              <input
                type="phone"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Phone Number"
                name="phoneNo"
                onChange={inputEvent}
                value={details.phoneNo}
              />
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                name="message"
                style={{ height: "150px", resize: "none" }}
                onChange={inputEvent}
                value={details.message}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark mt-5 ms-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SectionThree;
