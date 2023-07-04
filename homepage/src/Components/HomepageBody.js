import React from "react";
import "./HomepageBody.css";
import { Link } from "react-router-dom";
import arrow from "../images/forward arrow.svg";
// import websiteVideo from "../images/Dropbox_Homepage.mp4";
import VideoPlayer from "./VideoPlayer";
const HomepageBody = () => {
  return (
    <div className="homepageBodyContainer">
      <div className="homepageh2first">
        <p>Join over 700 million registered users who trust Dropbox</p>
      </div>
      <div className="homepageWebsiteFact1">
        <p>
          Easy to use, reliable, private, and secure. It’s no wonder Dropbox is
          the choice for storing and sharing your most important files.
        </p>
      </div>
      <div className="findyouplancontainer">
        <Link to="/register">
          <p className="findyourplanbutton">Find your plan</p>
          <img src={arrow} alt="arrow" className="arrow" />
        </Link>
      </div>
      <VideoPlayer />
    </div>
  );
};

export default HomepageBody;
