import React from 'react';
import './CardlistTitle.css';

const CardlistTitle = (props) => {
  const { title } = props;

  return <div className="header">{title}</div>;
};

export default CardlistTitle;
