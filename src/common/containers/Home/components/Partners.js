import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
import PrimaryButton from '../../../components/Button/Primary';
import PartnerTesda from '../../../images/partners-tesda.png';
import PartnerJobsConnect from '../../../images/partners-jobsconnect.png';

const propTypes = {
  media: PropTypes.object
};

const defaultProps = {
  media: {}
};

const Partners = ({ media, data }) => {
  const isTiny = media.tiny;
  const isBig = media.big;
  let textClass;
  textClass = isBig ? 'txt-big' : '';
  textClass = isTiny ? 'txt-tiny' : '';
  return (
    <Row>
      <Col xs={0} md={2} />
      <Col xs={24} md={20}>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          <Col xs={24} sm={12}>
            <h1 className="text-center">Partners</h1>
          </Col>
        </Row>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          <Col xs={24} md={12}>
            <div className="wrapper-course text-center">
              <img src={PartnerTesda} alt="Icon of Course Item" />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="wrapper-course text-center">
              <img src={PartnerJobsConnect} alt="Icon of Course Item" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={2} />
    </Row>
  );
};

Partners.propTypes = propTypes;
Partners.defaultProps = defaultProps;

export default withMedia(Partners);
