import React from 'react';
import './CardListTitle.css';

const CardListTitle = (props) => {
  const { title } = props;

  return <div className="header">{title}</div>;
};

export default CardListTitle;
