import { star_filledIcon } from '../../assets';
import React from 'react';

const Ratings = () => {
  return (
    <div className="ratings">
      <div>
        <span>
          <img src={star_filledIcon} alt="" />
        </span>
        <span>
          <img src={star_filledIcon} alt="" />
        </span>
        <span>
          <img src={star_filledIcon} alt="" />
        </span>
        <span>
          <img src={star_filledIcon} alt="" />
        </span>
        <span>
          <img src={star_filledIcon} alt="" />
        </span>
        <span>5.0</span>
        <span>7 Reviews</span>
      </div>
      <span>19 buyers</span>
    </div>
  );
};

export default Ratings;
