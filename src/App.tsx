import React from 'react';
import useFetch from './hooks/useFetch';
import { AddToBox } from './components/AddToBox';
import { InfoBox } from './components/InfoBox';
import ProductProvider from './context/product-context';
import CheckoutSummary from './components/CheckoutSummary';

const App = () => {
  const { product, loading } = useFetch();

  if (loading) return <div>Loading....</div>;

  if (!product) return <>Ooopsie Something Went Wrong!!!!</>;

  return (
    <ProductProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8">
            <InfoBox product={product} />
          </div>
          <div className="col-12 col-md-4 mt-3">
            <CheckoutSummary />
            <AddToBox shipping_info={product?.shipping} />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
