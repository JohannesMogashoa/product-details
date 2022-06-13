import { ProductCtx } from '../../context/product-context';
import React from 'react';
import { minusIcon, plusIcon } from '../../assets';

const OptionComponent = ({ option }) => {
  const { cart, descreaseQty, increaseQty, handleChange } =
    React.useContext(ProductCtx);

  const cartOption = cart.filter((opt) => opt.label === option.label)[0];
  const [editingQty, setEditingQty] = React.useState(cartOption?.qty ?? 0);

  const handleUpdateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingQty(parseInt(e.target.value));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(`Current Value: ${e.currentTarget.value}`);
    setEditingQty(parseInt(e.currentTarget.value));
    handleChange(option, editingQty);
  };

  React.useEffect(() => {
    setEditingQty(cart.filter((opt) => opt.label === option.label)[0]?.qty);
  }, [cart, option]);

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
        <span>{cartOption?.qty ?? 0}</span>
        <button className="enabled" onClick={() => increaseQty(option)}>
          <img src={plusIcon} alt="" />
        </button>
      </p>
    </div>
  );
};

export default OptionComponent;
