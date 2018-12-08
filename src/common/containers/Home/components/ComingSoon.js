import React from 'react';
import ComingSoonImg from '../../../images/comingsoon.png';
import '../../../css/ComingSoon.css';

const ComingSoon = () => (
  <div className="cm-wrapper">
    <a
      href="https://www.facebook.com/saijou.com.ph/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="cm-img"
        src={ComingSoonImg}
        alt="Saijou Internation Website Coming Soon"
      />
    </a>
  </div>
);

export default ComingSoon;
