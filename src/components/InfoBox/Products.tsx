import React from 'react';
import { Price } from '../../product.type';
import OptionComponent from './OptionComponent';

interface Option {
  label: string;
  price: Price;
  old_price: Price;
}

const Products = ({ options }) => {
  return (
    <div className="products">
      <div className="products__options">Options:</div>
      <div>
        {Object.values(options).map((option: Option) => (
          <OptionComponent option={option} key={option.label} />
        ))}
      </div>
    </div>
  );
};

export default Products;
