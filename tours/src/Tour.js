import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="container">
      <img src={image} alt={name} />

      <footer>
        <div className="co-container">
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `show less` : `show more`}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
