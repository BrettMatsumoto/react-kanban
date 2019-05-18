import React from 'react';

const Card = (props) => {
  console.log(props.title);
  const { title, body } = props;
  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
    </div>
  );
};

export default Card;
