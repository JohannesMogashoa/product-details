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
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <InfoBox product={product} />
          </div>
          <div className="col-md-4">
            <CheckoutSummary />
            <AddToBox shipping_info={product?.shipping} />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
