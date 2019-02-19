import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import getCourseImg from '../../../helpers/CourseImg';

const propTypes = {
  location: PropTypes.object,
  media: PropTypes.object,
  reduxAction: PropTypes.object,
};

const defaultProps = {
  location: {},
  media: {},
  reduxAction: {},
};

const Courses = ({ data, reduxAction, location }) => {
  // function redirectToCourses(e) {
  //   e.preventDefault();
  //   reduxAction.setActiveMenu('courses');
  //   // location.push('/courses');
  //   window.location = '/courses';
  //   debugger;
  // }
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
                    <p className="course-badgetitle">
                      {course.badgeTitle}
                    </p>
                  </div>
                  <Link to="/courses" className="no-underline">
                    <LazyLoad debounce={false} offsetVertical={500}>
                      <img
                        className="jumbotron-bg"
                        src={getCourseImg(course.badgeTitle)}
                        alt="Icon of Course Item"
                      />
                    </LazyLoad>
                  </Link>
                </div>
                <p className="course-tag">{course.tag}</p>
                <Link to="/courses" className="no-underline">
                  <p className="course-title">{course.title}</p>
                </Link>
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

export default withRouter(Courses);
