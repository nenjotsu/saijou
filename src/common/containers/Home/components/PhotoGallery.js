import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
// import RightArrow from '../../../images/right-arrow.png';
import CoursesItem from '../../../images/course-item.png';
import IconInstagram from '../../../images/instagram.png';

const propTypes = {
  media: PropTypes.object
};

const defaultProps = {
  media: {}
};

const PhotoGallery = ({ media, data }) => {
  const isTiny = media.tiny;
  const isBig = media.big;
  let textClass;
  textClass = isBig ? 'txt-big' : '';
  textClass = isTiny ? 'txt-tiny' : '';
  return (
    <Row>
      <Col xs={24}>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          <Col xs={24}>
            <p className="quote text-center">"Language CONNECTS People"</p>
            <p className="text-center">
              <img className="icon-4x" src={IconInstagram} alt="Instagram" />
              <br />
              <a href="" className="see-more">
                Follow us on Instagram
              </a>
            </p>
            <hr className="divider-md" />
          </Col>
        </Row>
        <Row gutter={1} type="flex" justify="space-around" align="middle">
          {data.map(course => {
            return (
              <Col key={course.title} xs={24} sm={12} md={6}>
                <img
                  className="jumbotron-bg"
                  src={CoursesItem}
                  alt="Icon of Course Item"
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

PhotoGallery.propTypes = propTypes;
PhotoGallery.defaultProps = defaultProps;

export default withMedia(PhotoGallery);
