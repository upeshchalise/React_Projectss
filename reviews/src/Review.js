import React from "react";
import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Review() {
  const [user, setUser] = useState(0);

  const { image, job, name, text } = reviews[user];

  const solved = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } else if (number < 1) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setUser((user) => {
      let newUser = user + 1;
      return solved(newUser);
    });
  };

  const prevReview = () => {
    setUser((user) => {
      let newUser = user - 1;
      return solved(newUser);
    });
  };

  const surpriseMe = () => {
    const random = Math.floor(Math.random() * reviews.length);
    setUser(random);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center my-4 h-screen">
      <div className="flex justify-center flex-col items-center w-96">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 rounded-full border-r-8 border-blue-500"
        />
        <div className="h-40 mb-1">
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{text}</p>
        </div>

        <div>
          <button className="mr-1" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>

        <div>
          <button
            className="border-blue-600 bg-blue-600 p-2 rounded-lg text-white"
            onClick={surpriseMe}
          >
            Suprise Me
          </button>
        </div>
      </div>
    </div>
  );
}
