import { star_filledIcon } from '../../assets';
import React from 'react';

const Ratings = ({ reviews }) => {
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
        <span>{reviews?.rating}</span>
        <span>{reviews?.count} Reviews</span>
      </div>
      <span>{reviews?.total_buyers} buyers</span>
    </div>
  );
};

export default Ratings;
