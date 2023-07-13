import React from "react";
import "./UsesOfDropbox.css";
import { Link } from "react-router-dom";
import forWorkingImg from "../UsesOfDropboxImages/forWorkImg.jpg";
import forPersonalUseImg from "../UsesOfDropboxImages/forPersonalUseImg.jpg";
import forwardArrow from "../images/forward arrow.svg";
import fiftyPercentImg from "../cloudStatsImages/fiftyPercent.svg";
import fourPointFiveBImg from "../cloudStatsImages/fourPointFiveBImg.svg";
import oneBillionImg from "../cloudStatsImages/oneBillionImg.svg";
import sixHundredKPlusImg from "../cloudStatsImages/sixHundredKPlusImg.svg";

const UsesOfDropbox = () => {
  return (
    <div className="usesOfDropboxContainer">
      <div className="usesOfDropboxCenterQoute">
        <p>How will you use Dropbox?</p>
      </div>
      <div className="typesOfWorkDropbox">
        <div className="ContainerForTypeOfWork">
          <img
            src={forWorkingImg}
            alt="for working"
            className="imgForTypeOfWork"
          />
          <div className="contentForTypesOrWork">
            <div className="nestedContentForTypesOfWork">
              <p className="titileForTypeOfWork">For Work</p>
              <p className="explanationForTypeOfWork">
                Work efficiently with teammates and clients, stay in sync on
                projects, and keep company data safe—all in one place.
              </p>
              <div className="LinkForWork">
                <Link to="/register">
                  Get Dropbox for work
                  <img
                    src={forwardArrow}
                    alt="forward arrow"
                    className="forwardArrow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ContainerForTypeOfWork">
          <img
            src={forPersonalUseImg}
            alt="for personal use"
            className="imgForTypeOfWork"
          />
          <div className="contentForTypesOrWork">
            <div className="nestedContentForTypesOfWork">
              <p className="titileForTypeOfWork">For personal use</p>
              <p className="explanationForTypeOfWork">
                Keep everything that’s important to you and your family
                shareable and safe in one place. Back up files in the cloud,
                share photos and videos, and more.
              </p>
              <div className="LinkForPersonalUseWork">
                <Link to="/register">
                  Get Dropbox for personal use
                  <img
                    src={forwardArrow}
                    alt="forward arrow"
                    className="forwardArrow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DropboxServiceCloudStorage">
        <div className="DropboxServiceCloudStorageCenterQoute">
          <p>Cloud storage you can count on</p>
        </div>
        <div className="DropboxCloudStorageStats">
          <div>
            <img src={ fiftyPercentImg } alt="" />
            <p className="titleForCloudStats">of Fortune 500 companies</p>
            <p className="explanationOfTitleForCloudStats">have at least one Dropbox team plan.</p>
          </div>
          <div>
            <img src={ oneBillionImg } alt="" />
            <p className="titleForCloudStats">mobile app downloads</p>
            <p className="explanationOfTitleForCloudStats">with Editors’ Choice Awards from the Google Play and Apple App Store.</p>
          </div>
          <div>
            <img src={sixHundredKPlusImg} alt="" />
            <p className="titleForCloudStats">teams globally</p>
            <p className="explanationOfTitleForCloudStats">use Dropbox to share work, safeguard content, and grow their business.</p>
          </div>
          <div>
            <img src={fourPointFiveBImg} alt="" />
            <p className="titleForCloudStats">connections and counting</p>
            <p className="explanationOfTitleForCloudStats">created through Dropbox file sharing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsesOfDropbox;
