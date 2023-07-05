import React from "react";
import "./DropboxProductsHomepage.css";
import dropboxProductimg from "../products_section_images/Dropbox.svg";
import signProductimg from "../products_section_images/Sign.svg";
import DocSendProductimg from "../products_section_images/Docsend.svg";
import backupProductimg from "../products_section_images/Backup.svg";
import captureProductimg from "../products_section_images/Capture.svg";
import trasferProductimg from "../products_section_images/Transfer.svg";
import paperProductimg from "../products_section_images/Paper.svg";
import passwordsProductimg from "../products_section_images/Passwords.svg";
import arrow from "../images/forward arrow.svg";
import { Link } from "react-router-dom";

const DropboxProductsHomepage = () => {
  console.log("DropboxProductsHomepage.js");
  return (
    <div className="dorpboxProductsHomepageContainer">
      <div className="dorpboxProductsHomepageQoute">
        <p>A set of products to help you do more</p>
      </div>
      <div className="productsExplaningContainer">
        <div>
          <img src={dropboxProductimg} alt="dropboximg" />
          <h3>Dropbox</h3>
          <p>Securely store, organize, and share all your files.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={signProductimg} alt="sign_svg" />
          <h3>Sign</h3>
          <p>Streamline your document workflows with legally-binding eSignatures.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={DocSendProductimg} alt="doc send svg" />
          <h3>DocSend</h3>
          <p>Securely share your documents with real-time insights, so you know what's most impactful.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={backupProductimg} alt="backup svg" />
          <h3>Backup</h3>
          <p>Automatically back up important files on your devices to the cloud and easily restore them.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={captureProductimg} alt="capture svg" />
          <h3>Capture</h3>
          <p>Get your message across with screenshots, GIFs, or videos recorded right on your screen.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={trasferProductimg} alt="trasfer svg" />
          <h3>Transfer</h3>
          <p>Quickly and securely deliver large files—up to 100 GB—to anyone.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={paperProductimg} alt="paper svg" />
          <h3>Paper</h3>
          <p>Create collaborative documents to coordinate work and drive projects forward.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
        <div>
          <img src={passwordsProductimg} alt="password svg" />
          <h3>Passwords</h3>
          <p>Automatically store unlimited passwords in one central, secure place.</p>
          <Link to="/register">Learn more <img src={arrow} alt="arrow" /> </Link>
        </div>
      </div>
    </div>
  );
};

export default DropboxProductsHomepage;
