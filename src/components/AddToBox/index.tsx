import { envelopeIcon, infoIcon } from '../../assets';
import React, { FunctionComponent } from 'react';
import { ShippingInfo } from '../../types/product.type';
import Tooltip from '../tooltip';

export const AddToBox: FunctionComponent<{ shipping_info: ShippingInfo }> = ({
  shipping_info: { method, lead_time, props },
}) => {
  return (
    <div className="add-to-box padding-x">
      <div className="add-to-box__shipping_cost">
        <span>
          Ship to {method?.country} by {method?.title}
        </span>
        <span>
          {method?.cost?.value.toLocaleString('en-ZA', {
            style: 'currency',
            currency: method?.cost?.currency?.code,
          })}
        </span>
      </div>
      <div className="add-to-box__lead_time">
        Lead Time <span>{lead_time?.value?.split(' ')[0]}</span>{' '}
        {lead_time?.value?.split(' ')[1]}
        <Tooltip text={`${lead_time?.info} ${lead_time?.value}`}>
          <img src={infoIcon} alt="" />
        </Tooltip>
      </div>
      <div className="add-to-box__shipping_time">
        Shipping time <span>{method?.shipping_time?.value?.split(' ')[0]}</span>{' '}
        {method?.shipping_time?.value?.split(' ')[1]}{' '}
        <Tooltip
          text={`${method?.shipping_time?.info} ${method?.shipping_time?.value}`}
        >
          <img src={infoIcon} alt="" />
        </Tooltip>
      </div>
      <button className="add-to-box__login_button">Login to Purchase</button>
      <button className="add-to-box__contact_button">
        <img src={envelopeIcon} alt="" />
        Contact the Supplier
      </button>
    </div>
  );
};
