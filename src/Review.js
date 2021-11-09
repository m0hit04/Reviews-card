import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  //states

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //functions

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let num = index - 1;
      return checkNumber(num);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let num = index + 1;
      return checkNumber(num);
    });
  };

  const randomPerson = () => {
    let num = Math.floor(Math.random() * people.length);
    if (num === index) {
      num = num + 1;
    }
    setIndex(checkNumber(num));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        Surprise me
      </button>
    </article>
  );
};

export default Review;
