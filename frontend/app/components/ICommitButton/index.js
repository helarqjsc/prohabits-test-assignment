import React, { Component } from 'react';

/* component styles */
import s from './styles.css';

function ICommitButton({
  commitOnClick = () => {},
  completeOnClick = () => {},
  commitmentExists = false,
}) {
  return (
    <div>
      {!commitmentExists &&
        <a onClick={commitOnClick} className={s['button']}>
          <div className={s['active-i-commit']}>
            <div className={s['active-rectangle']} />
            <div className={s['active-label']}>I Commit </div>
          </div>
        </a>
      }
      {commitmentExists &&
        <a onClick={completeOnClick} className={s['button']}>
          <div className={s['complete-i-commit']}>
            <div className={s['complete-rectangle']} />
            <div className={s['complete-view8']}>
              <img className={s['complete-shape']} src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2complete  1920px copy 3shape@2x.png" />
              <div className={s['complete-complete']}>Complete </div>
            </div>
          </div>
        </a>
      }
    </div>
  );
}

export default ICommitButton;
