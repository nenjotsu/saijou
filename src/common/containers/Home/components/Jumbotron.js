import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
import PrimaryButton from '../../../components/Button/Primary';
// import RightArrow from '../../../images/right-arrow.png';
import JumbotronBg from '../../../images/jumbotron-bg.png';

const propTypes = {
  media: PropTypes.object,
  data: PropTypes.object
};

const defaultProps = {
  media: {},
  data: {}
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
      <Col xs={24} md={8} xl={6}>
        <div className="jumbotron-left">
          <p className={`jumbotron-text ${textClass}`}>
            Saijou International
            <br />
            Training Center
            <br />
            <small>最上国際研修センター</small>
            <small className="jumbotron-tagline">{data.tagline}</small>
          </p>
          <PrimaryButton label={data.enrollLabel} type="full" />
        </div>
      </Col>
      <Col xs={24} md={12} xl={14}>
        <span>
          <img
            className="jumbotron-bg"
            src={JumbotronBg}
            alt="Illustration Japanese Learning"
          />
        </span>
      </Col>
      <Col xs={0} md={2} />
    </Row>
  );
};

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default withMedia(Jumbotron);
