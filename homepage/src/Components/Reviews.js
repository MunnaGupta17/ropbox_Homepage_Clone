import React, { useState } from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";
import Adam_Montgomery from "../ReviewsImages/Adam_Montgomery.webp";
import Andi_Scull from "../ReviewsImages/Andi_Scull.webp";
import Ann_Kappes from "../ReviewsImages/Ann_Kappes.webp";
import Mary_Ashley_Krogh from "../ReviewsImages/Mary_Ashley_Krogh.webp";
import Murray_Bell from "../ReviewsImages/Murray_Bell.webp";
import Sahir_Zaveri from "../ReviewsImages/Sahir_Zaveri.webp";
import Sophia_Chang from "../ReviewsImages/Sophia_Chang.webp";
import arrow from "../images/forward arrow.svg";

const Slider = () => {
  const dd = [
    {
      imgLink: Mary_Ashley_Krogh,
      review:
        "Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.",
      nameAndDegisnation:
        "Mary Ashley Krogh (MAK), Illustrator and Graphic Designer",
      backgroundColor: "one",
      color: "LinkOne",
    },
    {
      imgLink: Adam_Montgomery,
      review:
        "Dropbox increased our team’s collaboration while working from home, which has increased our flexibility and could revolutionize our office culture.",
      nameAndDegisnation:
        "Adam Montgomery, Senior Manager of Programming, Sundance Film Festival",
      backgroundColor: "two",
      color: "LinkTwo",
    },
    {
      imgLink: Ann_Kappes,
      review:
        "We’re a grass-roots nonprofit. When we use a tool that the rest of the design world uses, it helps professionalize our organization.",
      nameAndDegisnation:
        "Ann Kappes, Director of Art Partnerships at Creativity Explored",
      backgroundColor: "three",
      color: "LinkThree",
    },
    {
      imgLink: Murray_Bell,
      review:
        "Dropbox easily allows me to transfer what’s in my mind to another person.",
      nameAndDegisnation:
        "Murray Bell, Founder and Executive Creative Director of Semi Permanent",
      backgroundColor: "four",
      color: "LinkFour",
    },
    {
      imgLink: Sophia_Chang,
      review:
        "Our team is working remotely—everyone's in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.",
      nameAndDegisnation: "Sophia Chang, Illustrator and Designer",
      backgroundColor: "five",
      color: "LinkFive",
    },
    {
      imgLink: Sahir_Zaveri,
      review:
        "Dropbox version control is very important. You may want to go back to an earlier version because there's an idea in there that you really like.",
      nameAndDegisnation: "Sahir Zaveri, CEO of King Children",
      backgroundColor: "six",
      color: "LinkSix",
    },
    {
      imgLink: Andi_Scull,
      review:
        "Creative growth happens when you don’t have to worry about managing storage.",
      nameAndDegisnation:
        "Andi Scull, Founder and Creative Director, HOPE Organization",
      backgroundColor: "seven",
      color: "LinkSeven",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? dd.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === dd.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="reviewsContainerHeadline">
        <p>Trusted by over 700 million registered users and 600,000 teams</p>
        <Link to="/register">View more customer stories</Link>
      </div>

      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {dd.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${slide.backgroundColor} ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={slide.imgLink} alt="review" />
            <div>
              <div className="reviewDescriptionAndLinkContinaer">
                <p className="reviewDescription">"{slide.review}"</p>
                <Link to="/" className={slide.color}>
                  Read the full story
                </Link>
              </div>

              <p className="nameAndDegisnation">{slide.nameAndDegisnation}</p>
            </div>
            {index === currentSlide && (
              <>
                {index > 0 && (
                  <button className="prev-button" onClick={handlePrev}>
                    &lt;
                  </button>
                )}
                {index < 6 && (
                  <div className="next-button-container">
                    <button className="next-button" onClick={handleNext}>
                      &gt;
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="slideCounterAndMoverContainer">
        {currentSlide == 0 && <button>&lt;</button>}
        {currentSlide > 0 && <button onClick={handlePrev}>&lt;</button>}
        <p className="slideCounterForReviews">0{currentSlide + 1}/07</p>
        {currentSlide < 6 && <button onClick={handleNext}>&gt;</button>}
        {currentSlide > 5 && <button>&gt;</button>}

      </div>

      <div className="ReferContainerUnderReviews">
        <div className="referQouteUnderReview">
          <p>For all things worth sharing.</p>
        </div>
        <div className="referLinkUnderReviews">
        <Link to="/" >
           <p>Refer a friend</p>
          <img src={arrow} alt="arrow" className="arrow" />
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Slider;
