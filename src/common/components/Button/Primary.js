import React from 'react';
import RightArrow from '../../images/right-arrow.png';

export default function PrimaryButton({ label, type, onClick }) {
  let onClickHandle = onClick || (() => {});
  // if (label === 'Enroll Now') {
  //   onClickHandle = e => {
  //     e.preventDefault();
  //     window.location =
  //       'https://docs.google.com/forms/d/e/1FAIpQLSeJ4XShhEcAJT_dFY50xqf5snheKD0Z5PorHaG1mlhk2HUt1w/viewform';
  //   };
  // }
  return (
    <button
      onClick={onClickHandle}
      className={`primary-btn ${type === 'full' ? 'enroll-left' : ''} ${
        label === 'Enroll Now' ? 'solo-btn' : ''
      }`}
    >
      <span>{label}</span>
      <span>
        <img className="arrow-right" src={RightArrow} alt={label} />
      </span>
    </button>
  );
}
