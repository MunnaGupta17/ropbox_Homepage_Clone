import React from "react";
import { Link } from "react-router-dom";
import "./DropboxDropdownMenu.css";

const DropboxDropdownMenu = () => {
  return (
    <div className="dropboxDropdownMenu">
      <div>
        <ul className="dropboxdropdownMenu">
          <li>
            <p>Overview</p>
          </li>
          <li>
            <Link to="/">Get inspired</Link>
          </li>
          <li>
            <Link to="/">What customers say</Link>
          </li>
          <li>
            <Link to="/">App integrations</Link>
          </li>
          <li>
            <Link to="/">Resources</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <p>Better with Dropbox</p>
          </li>
          <li>
            <Link to="/">Share files</Link>
          </li>
          <li>
            <Link to="/">Store and organize</Link>
          </li>
          <li>
            <Link to="/">Sync your devices</Link>
          </li>
          <li>
            <Link to="/">Protect and secure data</Link>
          </li>
          <li>
            <Link to="/">Connect remote teams</Link>
          </li>
          <li>
            <Link to="/">Keep work moving</Link>
          </li>
          <li>
            <Link to="/">Always-on Backup</Link>
          </li>
          <li>
            <Link to="/">Sign a document</Link>
          </li>
          <li>
            <Link to="/">Track document analytics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropboxDropdownMenu;
