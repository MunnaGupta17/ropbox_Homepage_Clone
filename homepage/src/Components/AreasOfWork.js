import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import upArrow from "../images/up_arrow.svg";
import "./useDropboxSection.css";
import myFilesImg from "../areasOfWorkImages/myFilesImages.webp";
import clientAgreementImg from "../areasOfWorkImages/clientAgreementImage.webp";
import clientProposalImg from "../areasOfWorkImages/clientProposalImage.webp";
import insightsImg from "../areasOfWorkImages/insightsImage.webp";
import personalInfoImg from "../areasOfWorkImages/personalInfoImage.webp";
import round1Img from "../areasOfWorkImages/round1Image.webp";
import trackAnalyzeImg from "../areasOfWorkImages/trackAnalyzeImage.svg";
import vacationImg from "../areasOfWorkImages/vacationImage.webp";

const AreasOfWork = () => {
  const showPointExplanation = {
    showPointOne: false,
    showPointTwo: false,
    showPointThree: false,
    showPointFour: false,
    showPointFive: false,
    showPointSix: false,
    showPointSeven: false,
    showPointEight: false,
  };
  const [showEx, setShowEx] = useState({ ...showPointExplanation });
  // setShowEx(showEx.showPointOne = true);

  const showExplanation = (e) => {
    switch (e) {
      case "one":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointOne: !showEx.showPointOne,
        }));
        break;
      case "two":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointTwo: !showEx.showPointTwo,
        }));
        break;
      case "three":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointThree: !showEx.showPointThree,
        }));
        break;
      case "four":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointFour: !showEx.showPointFour,
        }));
        break;
      case "five":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointFive: !showEx.showPointFive,
        }));
        break;
      case "six":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointSix: !showEx.showPointSix,
        }));
        break;
      case "seven":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointSeven: !showEx.showPointSeven,
        }));
        break;
      case "eight":
        setShowEx(() => ({
          ...showPointExplanation,
          showPointEight: !showEx.showPointEight,
        }));
        break;
    }
  };

  // className={`upArrow ${showEx.showPointOne ? "clickedUpArrow" : ""}`}
  

  return (
    <div className="areasOfWorkContainer">
      <div className="areasOfWorkPoints">
        <div className="Points" onClick={() => showExplanation("one")}>
          <div className="pointHeadline">
            <p>Get 2 GB of cloud storage for free with Dropbox Basic</p>
            <img
  src={upArrow}
  className={` ${showEx.showPointOne ? "rotatedUpArrow" : "upArrow"}`}
  alt=""
/>
          </div>
          {showEx.showPointOne && (
            <div className="pointExplanation">
              <p>
                Save and access your files from any device, and share them with
                anyone. Discover what Dropbox can do for you- get a free
                account, no strings attached!
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("two")}>
          <div className="pointHeadline">
            <p>
              Dropbox Plus has room for all your content with space to spare
            </p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointTwo && (
            <div className="pointExplanation">
              <p>
                Safeguard your photos, personal docs, work files, and much more.
                Save everything with 2,000 GB of space—and get some handy tools
                to help you stay organized.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("three")}>
          <div className="pointHeadline">
            <p>
              Dropbox Family is a place for everyone with space for everything
            </p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointThree && (
            <div className="pointExplanation">
              <p>
                Share 2,000 GB of storage between 6 people. Each family plan
                member gets their own private Dropbox account for less than the
                price of two Plus plans.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("four")}>
          <div className="pointHeadline">
            <p>
              Make life easier for you and your clients with Dropbox
              Professional
            </p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointFour && (
            <div className="pointExplanation">
              <p>
                Get our full suite of premium productivity and sharing
                tools—plus 3,000 GB of space. Dropbox Professional makes it
                easier for you to work with colleagues and clients.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("five")}>
          <div className="pointHeadline">
            <p>Streamline your document workflow with Dropbox Sign</p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointFive && (
            <div className="pointExplanation">
              <p>
                Save yourself time and hassle with Dropbox Sign. You can sign
                legally-binding agreements with a few clicks. And it's just as
                easy to request a signature from someone else.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("six")}>
          <div className="pointHeadline">
            <p>
              Centralize, secure, and easily access your work with Dropbox
              Standard
            </p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointSix && (
            <div className="pointExplanation">
              <p>
                Safeguard sensitive and confidential info. Automate
                time-consuming processes with powerful admin and collaboration
                tools. And easily recover your work if something ever goes
                wrong. Minimum 3 users per plan.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("seven")}>
          <div className="pointHeadline">
            <p>DocSend lets you track, analyze, and optimize your content</p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointSeven && (
            <div className="pointExplanation">
              <p>
                Safely share business-critical documents and get real-time
                performance insights. DocSend helps you manage and optimize your
                company’s most important content.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
        <div className="Points" onClick={() => showExplanation("eight")}>
          <div className="pointHeadline">
            <p>
              Proactively detect threats to your team’s content with Dropbox
              Advanced
            </p>
            <img src={upArrow} className="upArrow" alt="" />
          </div>
          {showEx.showPointEight && (
            <div className="pointExplanation">
              <p>
                Always-on security monitoring and alerts. Extended 1-year
                version history and file recovery. Plus all the storage space
                you need. Dropbox Advanced is a secure collaboration solution
                for your entire team. Minimum 3 users per plan.
              </p>
              <Link to="/">Learn more</Link>
            </div>
          )}
        </div>
      </div>
      <div className="imageShowcasingPoint">
        {showEx.showPointOne && (
          <img src={myFilesImg} className="myfilesImage" alt="" />
        )}
        {showEx.showPointTwo && (
          <img src={personalInfoImg} className="personalInfoImg" alt="" />
        )}
        {showEx.showPointThree && (
          <img src={vacationImg} className="vacationImg" alt="" />
        )}
        {showEx.showPointFour && (
          <img src={round1Img} className="round1Img" alt="" />
        )}
        {showEx.showPointFive && (
          <img
            src={clientAgreementImg}
            className="clientAgreementImage"
            alt=""
          />
        )}
        {showEx.showPointSix && (
          <img src={clientProposalImg} className="clientProposalImg" alt="" />
        )}
        {showEx.showPointSeven && (
          <img src={trackAnalyzeImg} className="trackAnalyzeImg" alt="" />
        )}
        {showEx.showPointEight && (
          <img src={insightsImg} className="insightsImg" alt="" />
        )}
      </div>
    </div>
  );
};

export default AreasOfWork;
