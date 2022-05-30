import { forwardIcon, marchExpoImage } from '../../assets';
import React from 'react';

const MarchExpo = () => {
  return (
    <div className="march-expo">
      <img src={marchExpoImage} alt="" className="march-expo__image" />
      <span className="march-expo__text">• Free shipping (up to $40)</span>
      <span className="march-expo__arrow">
        <img src={forwardIcon} alt="" />
      </span>
    </div>
  );
};

export default MarchExpo;
