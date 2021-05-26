import React from "react";
import "./style.css";
import Video from "../../images/Fashion.mov";

function Banner() {
  return (
    <>
      <section className="video-container">
        <video
          className="video-hero"
          src={Video}
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </section>
      <section className="description">
        <div className="container">
          <p>
            Style Me is an application that allows you to upload photos of your
            clothing from your camera, computer or social media. Organize your
            clothes into outfits and categorize them by occasion, season, mood
            or whatever! Create your own personal look book and maximize your
            closet.
          </p>
        </div>
      </section>
    </>
  );
}

export default Banner;
