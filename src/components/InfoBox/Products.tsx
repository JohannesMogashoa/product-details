import { minusIcon, plusIcon } from '../../assets';
import React from 'react';

const Products = () => {
  return (
    <div className="products">
      <div className="products__options">Options:</div>
      <div>
        <div className="product">
          <p className="product__name">1080p</p>
          <p className="product__price">R 833.31</p>
          <p className="product__actions">
            <span>
              <img src={minusIcon} alt="" />
            </span>
            <span>0</span>
            <span>
              <img src={plusIcon} alt="" />
            </span>
          </p>
        </div>
        <div className="product">
          <p className="product__name">1080p</p>
          <p className="product__price">R 833.31</p>
          <p className="product__actions">
            <span>
              <img src={minusIcon} alt="" />
            </span>
            <span>0</span>
            <span>
              <img src={plusIcon} alt="" />
            </span>
          </p>
        </div>
        <div className="product">
          <p className="product__name">1080p</p>
          <p className="product__price">R 833.31</p>
          <p className="product__actions">
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
    </div>
  );
};

export default Products;
