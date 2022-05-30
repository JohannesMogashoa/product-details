import { clockIcon } from '../../assets';
import React from 'react';

const CountDown = () => {
  return (
    <div className="countdown">
      <span className="countdown__text">
        <span>20% OFF</span> Discount ends in
      </span>
      <span className="countdown__timer">
        <img src={clockIcon} alt="" />{' '}
        <span className="text-italic">2d:01h:56m:49s</span>
      </span>
    </div>
  );
};

export default CountDown;
