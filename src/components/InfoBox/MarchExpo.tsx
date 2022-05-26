import { forwardIcon, marchExpoImage } from '../../assets';
import React from 'react';

const MarchExpo = () => {
  return (
    <div>
      <img src={marchExpoImage} alt="" />
      <span>&#1748; Free Shipping (up to $40)</span>
      <span>
        <img src={forwardIcon} alt="" />
      </span>
    </div>
  );
};

export default MarchExpo;
