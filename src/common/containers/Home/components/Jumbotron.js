import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
import PrimaryButton from '../../../components/Button/Primary';
// import RightArrow from '../../../images/right-arrow.png';
import JumbotronBg from '../../../images/jumbotron-bg.png';

import Facebook from '../../../images/facebook.png';
import Youtube from '../../../images/youtube.png';
import Twitter from '../../../images/twitter.png';

const propTypes = {
  media: PropTypes.object,
  data: PropTypes.object,
};

const defaultProps = {
  media: {},
  data: {},
};

const Jumbotron = ({ media, data }) => {
  const isTiny = media.tiny;
  const isBig = media.big;
  let textClass;
  textClass = isBig ? 'txt-big' : '';
  textClass = isTiny ? 'txt-tiny' : '';
  return (
    <Row>
      <Col xs={0} md={2} />
      <Col xs={24} md={20}>
        <div className="jumbotron-left">
          <p className={`jumbotron-text ${textClass}`}>
            Saijou International Training Center
            <br />
            <small>最上国際研修センター</small>
            <br />
            <small className="jumbotron-tagline">{data.tagline}</small>
          </p>
          <Link to="/contact">
            <PrimaryButton label={data.enrollLabel} type="full" />
          </Link>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com/saijou.com.ph" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          {/* <img src={Twitter} alt="twitter" /> */}
          <a
            href="https://www.youtube.com/channel/UCqUmLvhanyzw4x65d736aDA"
            target="_blank"
          >
            <img src={Youtube} alt="youtube" />
          </a>
        </div>
      </Col>
      {/* <Col xs={24} md={12} xl={14}>
        <span>
          <img
            className="jumbotron-bg"
            src={JumbotronBg}
            alt="Illustration Japanese Learning"
          />
        </span>
      </Col> */}
      <Col xs={0} md={2} />
    </Row>
  );
};

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default withMedia(Jumbotron);
