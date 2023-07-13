import React from "react";
import "./Reviews.css";
import {Link} from "react-router-dom";

const Reviews = () => {
  return (
    <div className="reviewsSectionContainer">
      <div className="reviewsContainerHeadline" >
        <p>Trusted by over 700 million registered users and 600,000 teams</p>
        <Link to="/register">View more customer stories</Link>
      </div>
    </div>
  );
};

export default Reviews;
