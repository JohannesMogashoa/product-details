import { clockIcon } from '../../assets';
import React from 'react';

const CountDown = () => {
  return (
    <div>
      <span>20% OFF Discount ends in</span>
      <span>
        <img src={clockIcon} alt="" /> <span>2d:01h:56m:49s</span>
      </span>
    </div>
  );
};

export default CountDown;
