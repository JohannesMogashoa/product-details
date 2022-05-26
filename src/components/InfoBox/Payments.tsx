import { appleIcon, mastercardIcon, visaIcon } from '../../assets';
import React from 'react';

const Payments = () => {
  return (
    <div>
      Payments:
      <img src={visaIcon} alt="" />
      <img src={mastercardIcon} alt="" />
      <img src={appleIcon} alt="" />
    </div>
  );
};

export default Payments;
