import { ProductCtx } from '../../context';
import React from 'react';
import { format_to_currency } from '../../helpers';

const CheckoutSummary = () => {
  const { cart, summary } = React.useContext(ProductCtx);
  return (
    <div>
      {cart.length ? (
        cart.map((option) => (
          <div key={option.label}>
            <span>
              {option.label} ({option.qty})
            </span>
            <span>{format_to_currency(option.price.value * option.qty)}</span>
          </div>
        ))
      ) : (
        <>No Options</>
      )}
      <div>Summary: {format_to_currency(summary) ?? format_to_currency(0)}</div>
    </div>
  );
};

export default CheckoutSummary;
