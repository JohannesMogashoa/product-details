import { okIcon } from '../../assets';
import React from 'react';

const Badges = () => {
  return (
    <div className="badges">
      <span className="bg-linear-gradient text-white">Read to Ship</span>
      <span className="bg-surface text-primary badges__item">
        <img src={okIcon} alt="" className="icon" />
        In Stock
      </span>
      <span className="bg-surface text-primary badges__item">
        <img src={okIcon} alt="" className="icon" />
        Fast Dispatch
      </span>
    </div>
  );
};

export default Badges;
