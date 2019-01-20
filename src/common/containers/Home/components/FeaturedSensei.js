import React from 'react';
// import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const propTypes = {};

const defaultProps = {};

const FeaturedSensei = ({ data }) => {
  return (
    <Row>
      <Col xs={0} md={2} />
      <Col xs={24} md={20}>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          <Col xs={24} md={12}>
            <h1>
              Featured <span className="txt-violet-001">Sensei</span>
              <small>Meet the sensei</small>
            </h1>
            <p>{data.tagline}</p>
            <p>{data.content}</p>
            <p>{data.subContent}</p>
            <p>- {data.name}</p>
            {/* <a href="" className="see-more">
              {data.seeMore}
            </a> */}
          </Col>
          <Col xs={24} md={12}>
            {/* <img
              className="jumbotron-bg"
              src={ScheduleImg}
              alt="Icon of Course Item"
            /> */}
            <iframe
              title="YoutubeSensei"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/i6A0TO7iGcg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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

export default FeaturedSensei;
