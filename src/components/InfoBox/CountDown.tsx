import { clockIcon } from '../../assets';
import React from 'react';
import Countdown from 'react-countdown';

const Completed = () => <span>Sale has ended!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completed />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}d:{hours}h:{minutes}m:{seconds}s
      </span>
    );
  }
};

const CountDown = ({ discount }) => {
  return (
    <div className="countdown">
      <span className="countdown__text">
        <span>{discount?.amount} OFF</span> Discount ends in
      </span>
      <span className="countdown__timer">
        <img src={clockIcon} alt="" />{' '}
        <span className="text-italic">
          <Countdown date={new Date(discount?.end_date)} renderer={renderer} />
        </span>
      </span>
    </div>
  );
};

export default CountDown;
