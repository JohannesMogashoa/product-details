import React from 'react';

const DescriptionBox = ({ name, tags }) => {
  return (
    <div className="description-text">
      <p className="text-black description-text__info font-large">{name}</p>
      <span className="description-text__box font-small text-gray">
        {tags[0]}
      </span>
    </div>
  );
};

export default DescriptionBox;
