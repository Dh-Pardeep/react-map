import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starNumber) => {
    setRating(starNumber);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let starColor;
      if (i < rating) {
        starColor = 'blue';
      } else if (i === rating) {
        starColor = 'red';
      } else {
        starColor = 'black';
      }

      stars.push(
        <span
          key={i}
          style={{ color: starColor, cursor: 'pointer' }}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
