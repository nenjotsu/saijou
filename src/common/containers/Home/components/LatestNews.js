import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import LatestNewsImg from '../../../images/latest-news.png';
import IconShare from '../../../images/icon-share.png';
import IconRightArrow from '../../../images/icon-right-arrow.png';

const propTypes = {
  media: PropTypes.object,
};

const defaultProps = {
  media: {},
};

const LatestNews = ({ data }) => {
  return (
    <Row>
      <Col xs={0} md={2} />
      <Col xs={24} md={20}>
        <h1>
          Latest <span className="txt-violet-001">News</span>
          <small>News & Activities</small>
        </h1>
        <Row gutter={8} type="flex" justify="space-around" align="top">
          <Col xs={24} md={14}>
            <img
              className="jumbotron-bg"
              src={LatestNewsImg}
              alt="Icon of Course Item"
            />
          </Col>
          <Col xs={24} md={10}>
            <h2>JLPT Examination this December 2018</h2>
            <p className="course-tag">
              By Author Name
              <br />
              <span className="course-subtitle">November 30, 2018</span>
            </p>
            <p>
              Pellentesque vitae augue quis eros scelerisque fringilla. Nulla
              rhoncus lectus sodales aliquet ultricies. In turpis turpis,
              blandit nec magna sed, facilisis dapibus magna. Nulla egestas
              tempus efficitur. Nam a rhoncus justo. Vivamus sed tellus in diam
              rhoncus ultricies at porttitor lectus.
              <br />
              Mauris finibus tellus ut risus pharetra lacinia. Suspendisse sed
              ornare arcu
            </p>
            <a href="" className="course-tag-icon">
              <img src={IconShare} alt="Share" />
              <span>Share</span>
            </a>
            <a href="" className="course-tag-icon pull-right">
              <span>See More</span>
              <img src={IconRightArrow} alt="See More" />
            </a>
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={2} />
    </Row>
  );
};

LatestNews.propTypes = propTypes;
LatestNews.defaultProps = defaultProps;

export default LatestNews;
