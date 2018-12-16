import React from 'react';
import RightArrow from '../../images/right-arrow.png';

export default function PrimaryButton({ label, type }) {
  return (
    <button
      className={`red-btn ${type === 'full' ? 'enroll-left' : ''} ${
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
