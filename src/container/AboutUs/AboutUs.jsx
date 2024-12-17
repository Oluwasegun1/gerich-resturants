import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding "
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>

        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Do ullamco tempor eu esse culpa sit culpa. Aliquip et anim officia do
          nisi sunt dolor deserunt in.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knief" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>

        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Do ullamco tempor eu esse culpa sit culpa. Aliquip et anim officia do
          nisi sunt dolor deserunt in.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
