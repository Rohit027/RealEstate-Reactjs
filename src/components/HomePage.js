import React from "react";
import ImageSilder from "./ImageSilder";
import DateAndTime from "./DateAndTime";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import Footer from "./Footer";
function HomePage() {
  return (
    <>
      <div className="home__container">
        <div className="home_title-block">
          <div className="container mx-auto text-center my-5">
            <h1>We are the most prestigious real estate dealers.</h1>
            <h2> We help you find your dream home.</h2>
            <div>
              <h3 style={{color:"yellow"}}>
                Real estate is the land along with any permanent improvements
                attached to the land, whether natural or man-made—including
                water, trees, minerals, buildings, homes, fences, and bridges.
                Real estate is a form of real property.On its own, real estate
                offers cash flow, tax breaks, equity building, competitive
                risk-adjusted returns, and a hedge against inflation.
              </h3>
            </div>
            <h2><button type="button" class="btn btn-outline-light">PROJECT LIST</button></h2>
            <li>Empire Reality Group Project</li>
            <li>Think Real Estate</li>
            <li>Dwell Well Real Estate</li>
            <li>Asset Brokers</li>
            <li>Sync Real Estate</li>
          </div>
          <a href="/" className="btn__one mt-2">
            Learn More
          </a>
        </div>
        <ImageSilder />
      </div>
      <DateAndTime />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

export default HomePage;
