import React from 'react';

const PriceBox = () => {
  return (
    <div className="price-box">
      <span className="price-box__current_price">R 78.50 - R 895.31</span>
      <span className="price-box__option">/ Option</span>
      <span className="price-box__options">
        2 Options <span>(Min.Order)</span>
      </span>
      <p className="price-box__old_price">R 98.12 - R 1,119.14</p>
    </div>
  );
};

export default PriceBox;
