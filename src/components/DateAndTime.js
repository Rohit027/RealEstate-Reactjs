import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

function DateAndTime() {
  return (
    <div className="datetime_section">
      <div className="datetime__container">
        <div className="arrival_date">
            <div className={{width:"100vw"}}></div>
          <h3>Booking Date</h3>
          <Datetime />
        </div>
      </div>
      <button type="button" className="btn btn-lg btn-dark btn__book ">
        Book
      </button>
    </div>
  );
}

export default DateAndTime;
