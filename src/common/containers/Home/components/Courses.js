import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withMedia from '../../../helpers/WithMediaQueries';
// import RightArrow from '../../../images/right-arrow.png';
import CoursesItem from '../../../images/course-item.png';
import BirdImg from '../../../images/course-thumb-bird.png';
import KoiImg from '../../../images/course-thumb-koi.png';
import BonsaiImg from '../../../images/course-thumb-bonsai.png';
import ShrineImg from '../../../images/course-thumb-shrine.png';

const propTypes = {
  media: PropTypes.object,
};

const defaultProps = {
  media: {},
};

const getCourseImg = badgeTitle => {
  console.log('badgeTitle', badgeTitle);
  let imgSrc = CoursesItem;
  switch (badgeTitle) {
    case 'N5 Level I':
      imgSrc = BirdImg;
      break;
    case 'N4 Level II':
      imgSrc = KoiImg;
      break;
    case 'Nihongo I':
      imgSrc = BonsaiImg;
      break;
    case 'Nihongo II':
      imgSrc = ShrineImg;
      break;

    default:
      imgSrc = CoursesItem;
      break;
  }
  return imgSrc;
};

const Courses = ({ media, data }) => {
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
            <h1>
              Courses <span className="txt-violet-001">Offered</span>
              <small>Choose from our various services</small>
            </h1>
          </Col>
          <Col xs={24} sm={8} push={6}>
            {/* <a href="" className="see-more">
              view more...
            </a> */}
          </Col>
        </Row>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          {data.map(course => {
            return (
              <Col key={course.title} xs={24} sm={12} md={6}>
                <div className="wrapper-course">
                  <div className="wrapper-course-badgetitle">
                    <p className="course-badgetitle">{course.badgeTitle}</p>
                  </div>
                  <img
                    className="jumbotron-bg"
                    src={getCourseImg(course.badgeTitle)}
                    alt="Icon of Course Item"
                  />
                </div>
                <p className="course-tag">{course.tag}</p>
                <p className="course-title">{course.title}</p>
                <p className="course-subtitle">{course.subTitle}</p>
                <p className="course-hours">{course.hours}</p>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col xs={0} md={2} />
    </Row>
  );
};

Courses.propTypes = propTypes;
Courses.defaultProps = defaultProps;

export default withMedia(Courses);
