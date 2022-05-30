import React from 'react';
import { productImage } from '../../assets';
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

export const InfoBox = () => {
  return (
    <div className="info-box">
      {/* Product Image */}
      <div className="image_wrapper">
        <img src={productImage} alt="Product" className="image" />
      </div>
      <div>
        <Badges />
        <div className="spacer"></div>
        <DescriptionBox />
        <div className="spacer"></div>
        <Ratings />
        <div className="spacer"></div>
        <PriceBox />
        <div className="spacer"></div>
        <MarchExpo />
        <div className="spacer"></div>
        <CountDown />
        <div className="spacer"></div>
        <Products />
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
