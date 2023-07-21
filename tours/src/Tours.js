// import React, { useEffect, useState } from "react";

import Tour from "./Tour";

// const url = "https://course-api.com/react-tours-project";

const Tours = ({ tours, removeTours }) => {
  return (
    <>
      <section className="app">
        <div className="title">
          <h1>Our Tours</h1>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
