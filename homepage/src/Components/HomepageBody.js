import React from "react";
import "./HomepageBody.css";
import { Link } from "react-router-dom";
import arrow from "../images/forward arrow.svg";
import smilePic from "../images/emoji smile.svg";
import cloudPic from "../images/cloud done.svg";
import shieldPic from "../images/shield.svg";
import twinklePic from "../images/twinkle.svg";
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
      <div className="whatSetsApartContainer">
        <div className="whatSetsDropboxApartQoute">
          <h2>See what sets Dropbox apart</h2>
        </div>
        <div className="whatSetsApartFactsContainer">
          <div>
            <img src={smilePic} alt="pic" className="whatSetsApartFactsSVG" />
            <h3>Your files, not ours</h3>
            <p>
              With Dropbox, your files belong to you, not us, so you can be sure
              we’re not reselling your data.
            </p>
          </div>
          <div>
            <img
              src={cloudPic}
              alt="smile pic"
              className="whatSetsApartFactsSVG"
            />
            <h3>All your files in one place</h3>
            <p>
              Store computer backups, photo libraries, thousands of
              documents—all your files, in the same place.
            </p>
          </div>
          <div>
            <img
              src={twinklePic}
              alt="smile pic"
              className="whatSetsApartFactsSVG"
            />
            <h3>One-of-a-kind functionality</h3>
            <p>
              Store files as large as 2 TB each, sync at light speed, and allow
              anyone to preview nearly 200 file types.
            </p>
          </div>
          <div>
            <img
              src={shieldPic}
              alt="smile pic"
              className="whatSetsApartFactsSVG"
            />
            <h3>Ease of use and security</h3>
            <p>
              2/3 of surveyed users say Dropbox keeps their files more secure
              and we’re a leader in ease of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBody;
