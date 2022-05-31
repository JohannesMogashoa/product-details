import { clockIcon } from '../../assets';
import React from 'react';

const CountDown = ({ discount }) => {
  return (
    <div className="countdown">
      <span className="countdown__text">
        <span>{discount?.amount} OFF</span> Discount ends in
      </span>
      <span className="countdown__timer">
        <img src={clockIcon} alt="" />{' '}
        <span className="text-italic">
          {new Date(discount?.end_date).toLocaleString()}
        </span>
      </span>
    </div>
  );
};

export default CountDown;
