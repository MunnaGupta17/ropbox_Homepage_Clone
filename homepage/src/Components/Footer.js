import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "../socialMediaIcons/facebook.png";
import TwitterIcon from "../socialMediaIcons/twitterIcon.png";
import YoutubeIcon from "../socialMediaIcons/youtubeIcon.png";
import globeIcon from "../images/globeIcon.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="websitesLinksContainer">
        <div className="dropbox">
          <h3>Dropbox</h3>
          <Link to="/">Desktop app</Link>
          <Link to="/">Mobile app</Link>
          <Link to="/">Integrations</Link>
          <Link to="/">Features</Link>
          <Link to="/">Solutions</Link>
          <Link to="/">Do more than store</Link>
          <Link to="/">Security</Link>
          <Link to="/">Advance access</Link>
        </div>
        <div className="products">
          <h3>Products</h3>
          <Link to="/">Plus</Link>
          <Link to="/">Professional</Link>
          <Link to="/">Business</Link>
          <Link to="/">Enterprise</Link>
          <Link to="/">Dropbox Sign</Link>
          <Link to="/">DocSend</Link>
          <Link to="/">Plans</Link>
          <Link to="/">Product updates</Link>
        </div>
        <div className="support">
          <h3>Support</h3>
          <Link to="/">Help center</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Privacy & terms</Link>
          <Link to="/">Cookie policy</Link>
          <Link to="/">Cookies & CCPA preferences</Link>
          <Link to="/">AI principles</Link>
          <Link to="/">Sitemap</Link>
          <Link to="/">Learning resources</Link>
        </div>
        <div className="community">
          <h3>Community</h3>
          <Link to="/">Blog</Link>
          <Link to="/">Developers</Link>
          <Link to="/">Community forums</Link>
          <Link to="/">Referrals</Link>
          <Link to="/">Reseller partners</Link>
          <Link to="/">Integration partners</Link>
        </div>
        <div className="company">
          <h3>Company</h3>
          <Link to="/">About us</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Investor relations</Link>
          <Link to="/">ESG</Link>
          <Link to="/">Find a partner</Link>
        </div>
      </div>

      <div className="socialMediaHandles">
      <img src={TwitterIcon} alt="twitter" className="twitterIcon" />
        <img src={FacebookIcon} alt="facebook" className="facebookIcon" />
        
        <img src={YoutubeIcon} alt="youtube" className="youtubeIcon" />
      </div>
      <div className="underlineForSocialMediaHandles">
        <hr />
      </div>

      <div className="languageSelector">
        <img src={globeIcon} alt="globe" className="globeIcon" />
        <p>English (United States)</p>
        <button>&gt; </button>
      </div>
    </div>
  );
};

export default Footer;
