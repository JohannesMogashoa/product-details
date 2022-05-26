import React from 'react';
import { productImage } from '../../assets';
import Badges from './Badges';
import CountDown from './CountDown';
import DescriptionBox from './DescriptionBox';
import Links from './Links';
import MarchExpo from './MarchExpo';
import PriceBox from './PriceBox';
import Products from './Products';
import Ratings from './Ratings';
import TradeAssurance from './TradeAssurance';

export const InfoBox = () => {
  return (
    <div>
      {/* Product Image */}
      <div className="image_wrapper">
        <img src={productImage} alt="Product" className="image" />
      </div>
      <div>
        <Badges />
        <DescriptionBox />
        <Ratings />
        <PriceBox />
        <MarchExpo />
        <CountDown />
        <Products />
        <TradeAssurance />
        <Links />
      </div>
    </div>
  );
};
