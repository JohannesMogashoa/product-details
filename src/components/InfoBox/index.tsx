import { Product } from '../../types/product.type';
import React from 'react';
import Badges from './Badges';
import CountDown from './CountDown';
import DescriptionBox from './DescriptionBox';
import Links from './Links';
import MarchExpo from './MarchExpo';
import Payments from './Payments';
import PriceBox from './PriceBox';
import Products from './Products';
import Ratings from './Ratings';
import TradeAssurance from './TradeAssurance';

export const InfoBox: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="row mt-3">
      {/* Product Image */}
      <div className="image_wrapper col-md-6 col-xl-4">
        <img src={product?.gallery[0].main} alt="Product" className="image" />
      </div>
      <div className="col-md-6 col-xl-8">
        <Badges badges={product?.shipping?.props} />
        <div className="spacer"></div>
        <DescriptionBox name={product?.name} tags={product?.tags} />
        <div className="spacer"></div>
        <Ratings reviews={product?.reviews} />
        <div className="spacer"></div>
        <PriceBox options={product?.options} />
        <div className="spacer"></div>
        <MarchExpo />
        <div className="spacer"></div>
        <CountDown discount={product?.discount} />
        <div className="spacer"></div>
        <Products options={product?.options} />
        <div className="spacer"></div>
        <TradeAssurance />
        <div className="spacer"></div>
        <Payments />
        <div className="spacer"></div>
        <Links />
      </div>
    </div>
  );
};
