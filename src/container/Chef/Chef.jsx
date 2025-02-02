import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            We believe in the transformative power of food to create
            unforgettable moments of joy, connection, and celebration
          </p>
        </div>
        <p className="p__opensans">
          At Gericht Restaurant, every dish is a reflection of our passion,
          crafted with the finest ingredients and an innovative touch. But it’s
          not just about the food—it’s about the experience. From our warm,
          genuine hospitality to the inviting ambiance, we strive to make
          everyone feel at home. Our mission is simple: to turn every meal into
          a cherished memory and every visit into a story worth sharing.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
