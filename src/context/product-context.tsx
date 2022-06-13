import { Price } from '../types/product.type';
import * as React from 'react';

interface AppContextInferface {
  cart: Option[];
  summary: number;
  handleChange: (option: any, amount: number) => void;
  increaseQty: (option: any) => void;
  descreaseQty: (option: any) => void;
}

interface Option {
  label: string;
  price: Price;
  old_price: Price;
  qty: number;
}

export const ProductCtx = React.createContext<AppContextInferface | null>(null);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = React.useState<Option[]>([]);
  const [summary, setSummary] = React.useState<number>(0.0);

  /**
   * Increases the quantity of the product in the cart & add to cart if not present
   * @param product Product object passed through
   */
  const increaseQty = (option) => {
    if (!cart.find((opt) => opt.label === option.label)) {
      cart.push({ ...option, qty: 1 });
      setCart([...cart]);
    } else {
      cart.filter((opt) => {
        if (opt.label === option.label) {
          opt.qty += 1;
          setCart([...cart]);
        }
      });
    }

    calculateSummary();
  };

  /**
   * Descreases the quantity of the product in the cart & if product quantity is zero, remove from cart.
   * @param product Product object passed through
   */
  const descreaseQty = (option: Option) => {
    const index = cart.findIndex((opt) => opt.label === option.label);
    if (index > -1) {
      cart[index].qty -= 1;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      setCart([...cart]);
    }

    calculateSummary();
  };

  const handleChange = (option: Option, amount: number) => {
    calculateSummary();
  };

  const cleanCart = () => {
    const clean = cart.filter((opt) => opt.qty !== 0);
    setCart(clean);
  };

  const calculateSummary = () => {
    cleanCart();
    let runningSummary = 0;

    cart.map((option) => {
      runningSummary += option.price.value * option.qty;
    });

    setSummary(runningSummary);
  };

  return (
    <ProductCtx.Provider
      value={{ cart, summary, handleChange, increaseQty, descreaseQty }}
    >
      {children}
    </ProductCtx.Provider>
  );
};

export default ProductProvider;
