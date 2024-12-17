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
          At Gericht Resturant, we bring people together with exceptional
          flavors, warm hospitality, and a vibrant atmosphere. Every dish tells
          a story, crafted with passion and the finest ingredients. Join us for
          a dining experience to remember!
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
          Our journey began with a passion for great food and warm hospitality.
          Over the years, we've become a destination for unforgettable flavors
          and exceptional experiences.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
