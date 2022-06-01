import { minusIcon, plusIcon } from '../../assets';
import React from 'react';
import { Price } from '../../product.type';
import { ProductCtx } from '../../context';

interface Option {
  label: string;
  price: Price;
  old_price: Price;
}

const Products = ({ options }) => {
  const { cart, handleChange, increaseQty, descreaseQty } =
    React.useContext(ProductCtx);

  const OptionComponent = (option: Option) => {
    const cartOption = cart.filter((opt) => opt.label === option.label)[0];
    let val = cartOption?.qty || 0;
    let oldVal = val;

    const setVal = (amount: number) => (val = amount);

    const handleBlur = () => {
      if (val < 0 || typeof val != 'number') {
        val = oldVal;
      }
      oldVal = val;
      handleChange(option, val);
    };

    return (
      <div className="product" key={option.label}>
        <p className="product__name">{option?.label}</p>
        <p className="product__price">
          {option?.price.value.toLocaleString('en-ZA', {
            style: 'currency',
            currency: option.price.currency.code,
          })}
        </p>
        <p className="product__actions">
          <button
            disabled={cartOption?.qty === 0}
            className={cartOption?.qty > 0 ? 'enabled' : 'disabled'}
            onClick={() => descreaseQty(option)}
          >
            <img src={minusIcon} alt="" />
          </button>
          <input
            value={val}
            onChange={(e) => {
              e.preventDefault();
              setVal(parseInt(e.target.value));
            }}
            onBlur={() => handleBlur()}
          />
          <button className="enabled" onClick={() => increaseQty(option)}>
            <img src={plusIcon} alt="" />
          </button>
        </p>
      </div>
    );
  };

  return (
    <div className="products">
      <div className="products__options">Options:</div>
      <div>
        {Object.values(options).map((option: Option) =>
          OptionComponent(option)
        )}
      </div>
    </div>
  );
};

export default Products;
