import { Price } from './product.type';
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
  const [summary, setSummary] = React.useState<number>(0);

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

  const descreaseQty = (option) => {
    cart.filter((opt) => {
      if (opt.label === option.label) {
        if (opt.qty > 0) {
          opt.qty -= 1;
          setCart([...cart]);
        }
      }
    });

    calculateSummary();
  };

  const handleChange = (option, amount) => {
    cart.filter((opt) => {
      if (opt.label === option.label) {
        opt.qty = amount;
        setCart([...cart]);
      }
    });

    calculateSummary();
  };

  const calculateSummary = () => {
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
