import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PrimaryButton from '../../../components/Button/Primary';

const propTypes = {};

const defaultProps = {};

const EnrollNow = () => {
  return (
    <Row type="flex" justify="center" align="top">
      <Col xs={0} md={9} />
      <Col xs={24} md={6}>
        <Link to="/contact">
          <PrimaryButton label={'Enroll Now'} />
        </Link>
      </Col>
      <Col xs={0} md={9} />
    </Row>
  );
};

EnrollNow.propTypes = propTypes;
EnrollNow.defaultProps = defaultProps;

export default EnrollNow;
