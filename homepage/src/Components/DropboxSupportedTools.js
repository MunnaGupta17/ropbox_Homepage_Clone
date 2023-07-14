import React from "react";
import "./DropboxSupportedTools.css";
import abobeLogo from "../DropboxSupportedToolsImages/abobeLogo.webp";
import asanaLogo from "../DropboxSupportedToolsImages/asanaLogo.webp";
import canvasLogo from "../DropboxSupportedToolsImages/canvasLogo.webp";
import googleWorkspaceLogo from "../DropboxSupportedToolsImages/googleWorkspaceLogo.webp";
import microsoftOfficeLogo from "../DropboxSupportedToolsImages/microsoftOfficeLogo.webp";
import slackLogo from "../DropboxSupportedToolsImages/slackLogo.webp";
import trelloLogo from "../DropboxSupportedToolsImages/trelloLogo.webp";
import zoomLogo from "../DropboxSupportedToolsImages/zoomLogo.webp";
import { Link } from "react-router-dom";

const DropboxSupportedTools = () => {
    return (
        <div className="dorpboxProductsHomepageContainer">
      <div className="containerForSupportedTools">
        <p className="titleForSupportedToolsWithDropbox">Get more out of Dropbox by connecting with the tools you love</p>
        <Link to="/">Learn more about partner integrations</Link>
      </div>
      <div className="productsExplaningContainer">
        <div>
          <img src={zoomLogo} alt="dropboximg" />
          <h3>Zoom</h3>
          <p>Enhance remote collaboration with Zoom instant meetings and video recordings.</p>
        </div>
        <div>
          <img src={slackLogo} alt="sign_svg" />
          <h3>Slack</h3>
          <p>Bring Slack conversations and Dropbox content together to keep teams in sync.</p>
        </div>
        <div>
          <img src={abobeLogo} alt="doc send svg" />
          <h3>Adobe Creative Cloud</h3>
          <p>Easily and securely send files to clients and vendors from within Adobe Photoshop.</p>
        </div>
        <div>
          <img src={microsoftOfficeLogo} alt="backup svg" />
          <h3>Microsoft Office</h3>
          <p>Easily access, edit, and share Office docs online in Dropbox.</p>
          
        </div>
        <div>
          <img src={googleWorkspaceLogo} alt="capture svg" />
          <h3>Google Workspace</h3>
          <p>Create, edit, and share Google Docs, Sheets, and Slides in Dropbox.</p>
          
        </div>
        <div>
          <img src={trelloLogo} alt="trasfer svg" />
          <h3>Trello</h3>
          <p>Collaborate on team projects in Trello with Dropbox content.</p>
        
        </div>
        <div>
          <img src={canvasLogo} alt="paper svg" />
          <h3>Canvas</h3>
          <p>Upload course files or assignments straight from Dropbox to Canvas.</p>
          
        </div>
        <div>
          <img src={asanaLogo} alt="password svg" />
          <h3>Asana</h3>
          <p>Track all of your team’s work with Asana while keeping Dropbox content alongside.</p>
         
        </div>
      </div>
    
    </div>
    )
}

export default DropboxSupportedTools;