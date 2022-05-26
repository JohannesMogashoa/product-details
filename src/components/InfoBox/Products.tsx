import { minusIcon, plusIcon } from '../../assets';
import React from 'react';

const Products = () => {
  return (
    <div>
      <div>
        <p>1080p</p>
        <p>R 833.31</p>
        <p>
          <span>
            <img src={minusIcon} alt="" />
          </span>
          <span>0</span>
          <span>
            <img src={plusIcon} alt="" />
          </span>
        </p>
      </div>
      <div>
        <p>1080p</p>
        <p>R 833.31</p>
        <p>
          <span>
            <img src={minusIcon} alt="" />
          </span>
          <span>0</span>
          <span>
            <img src={plusIcon} alt="" />
          </span>
        </p>
      </div>
      <div>
        <p>1080p</p>
        <p>R 833.31</p>
        <p>
          <span>
            <img src={minusIcon} alt="" />
          </span>
          <span>0</span>
          <span>
            <img src={plusIcon} alt="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Products;
