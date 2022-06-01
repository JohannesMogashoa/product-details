import { Price } from '../../product.type';
import React from 'react';
import { format_to_currency } from '../../helpers';

interface Option {
  label: string;
  price: Price;
  old_price: Price;
}

const PriceBox = ({ options }) => {
  const currentPrices = [];
  const oldPrices = [];

  Object.values(options).forEach((option: Option) => {
    currentPrices.push(option.price.value);
    oldPrices.push(option.old_price.value);
  });

  return (
    <div className="price-box">
      <span className="price-box__current_price">
        {format_to_currency(Math.min(...currentPrices))} -{' '}
        {format_to_currency(Math.max(...currentPrices))}
      </span>
      <span className="price-box__option">/ Option</span>
      <span className="price-box__options">
        2 Options <span>(Min.Order)</span>
      </span>
      <p className="price-box__old_price">
        {format_to_currency(Math.min(...oldPrices))} -{' '}
        {format_to_currency(Math.max(...oldPrices))}
      </p>
    </div>
  );
};

export default PriceBox;
