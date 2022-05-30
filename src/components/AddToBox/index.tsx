import { envelopeIcon, infoIcon } from '../../assets';
import React from 'react';

export const AddToBox = () => {
  return (
    <div className="add-to-box padding-x">
      <div className="add-to-box__shipping_cost">
        <span>Ship to South Africa by Express UPS Sav…</span>
        <span>R 6,036.74</span>
      </div>
      <div className="add-to-box__lead_time">
        Lead Time <span>10</span> days <img src={infoIcon} alt="" />
      </div>
      <div className="add-to-box__shipping_time">
        Shipping time <span>6-10</span> days <img src={infoIcon} alt="" />
      </div>
      <button className="add-to-box__login_button">Login to Purchase</button>
      <button className="add-to-box__contact_button">
        <img src={envelopeIcon} alt="" />
        Contact the Supplier
      </button>
    </div>
  );
};
