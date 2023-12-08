import React from 'react';
import './Button.css';

const Button = ({ text, type, onClick }) => {
  const emotion = ['positive', 'negative'];
  const btnType = emotion.includes(type) ? type : 'default';
  const btnClass = ['Button', `Button_${btnType}`];
  return (
    <button className={btnClass.join(' ')} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
