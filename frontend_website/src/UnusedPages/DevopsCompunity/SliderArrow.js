import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './arrow.css';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      id='nextArrow'
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      id='prevArrow'
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
