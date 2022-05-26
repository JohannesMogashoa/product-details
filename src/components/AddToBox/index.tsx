import { envelopeIcon, infoIcon } from '../../assets';
import React from 'react';

export const AddToBox = () => {
  return (
    <div>
      <div>
        <span>Ship to South Africa by Express UPS Sav…</span>
        <span>R 6,036.74</span>
      </div>
      <div>
        Lead Time 10 days <img src={infoIcon} alt="" />
      </div>
      <div>
        Shipping time 6-10 days <img src={infoIcon} alt="" />
      </div>
      <div>
        <button>Login to Purchase</button>
        <button>
          <img src={envelopeIcon} alt="" />
          Contact the Supplier
        </button>
      </div>
    </div>
  );
};
