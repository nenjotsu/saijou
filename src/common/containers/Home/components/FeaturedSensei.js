import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
import ScheduleImg from '../../../images/schedule-img.png';

const propTypes = {
  media: PropTypes.object
};

const defaultProps = {
  media: {}
};

const FeaturedSensei = ({ media, data }) => {
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
          <Col xs={24} md={10}>
            <h1>
              Featured <span className="txt-violet-001">Sensei</span>
              <small>Meet the team</small>
            </h1>
            <p>{data.tagline}</p>
            <p>{data.content}</p>
            <p>{data.subContent}</p>
            <p>- {data.name}</p>
            <a href="" className="see-more">
              {data.seeMore}
            </a>
          </Col>
          <Col xs={24} md={14}>
            <img
              className="jumbotron-bg"
              src={ScheduleImg}
              alt="Icon of Course Item"
            />
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={2} />
    </Row>
  );
};

FeaturedSensei.propTypes = propTypes;
FeaturedSensei.defaultProps = defaultProps;

export default withMedia(FeaturedSensei);
