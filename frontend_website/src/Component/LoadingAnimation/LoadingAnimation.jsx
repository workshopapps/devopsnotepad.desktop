import React from 'react';
import style from './LoadingAnimation.module.css';

function LoadingAnimation() {
  return (
    <div class={style.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingAnimation;
