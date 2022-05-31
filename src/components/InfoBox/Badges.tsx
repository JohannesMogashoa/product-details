import { okIcon } from '../../assets';
import React from 'react';

const Badges = ({ badges }) => {
  return (
    <div className="badges">
      {badges?.ready_to_ship && (
        <span className="bg-linear-gradient text-white">Read to Ship</span>
      )}
      {badges?.in_stock && (
        <span className="bg-surface text-primary badges__item">
          <img src={okIcon} alt="" className="icon" />
          In Stock
        </span>
      )}
      {badges?.fast_dispatch && (
        <span className="bg-surface text-primary badges__item">
          <img src={okIcon} alt="" className="icon" />
          Fast Dispatch
        </span>
      )}
    </div>
  );
};

export default Badges;
