import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
import PrimaryButton from '../../../components/Button/Primary';

const propTypes = {
  media: PropTypes.object
};

const defaultProps = {
  media: {}
};

const EnrollNow = ({ media, data }) => {
  const isTiny = media.tiny;
  const isBig = media.big;
  let textClass;
  textClass = isBig ? 'txt-big' : '';
  textClass = isTiny ? 'txt-tiny' : '';
  return (
    <Row type="flex" justify="center" align="top">
      <Col xs={0} md={9} />
      <Col xs={24} md={6}>
        <PrimaryButton label={'Enroll Now'} />
      </Col>
      <Col xs={0} md={9} />
    </Row>
  );
};

EnrollNow.propTypes = propTypes;
EnrollNow.defaultProps = defaultProps;

export default withMedia(EnrollNow);
