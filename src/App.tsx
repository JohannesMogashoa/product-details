import React from 'react';
import useFetch from './useFetch';
import { AddToBox } from './components/AddToBox';
import { InfoBox } from './components/InfoBox';
import ProductProvider from './context';
import CheckoutSummary from './components/CheckoutSummary';

const App = () => {
  const { product, loading } = useFetch();

  if (loading) return <div>Loading....</div>;

  if (!product) return <>Ooopsie Something Went Wrong!!!!</>;

  return (
    <ProductProvider>
      <div className="app">
        <InfoBox product={product} />
        <div className="spacer"></div>
        <div>
          <CheckoutSummary />
          <AddToBox shipping_info={product?.shipping} />
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
