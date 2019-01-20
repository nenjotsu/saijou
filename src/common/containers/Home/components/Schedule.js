import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PrimaryButton from '../../../components/Button/Primary';
import ScheduleImg from '../../../images/schedule-display.jpg';

const propTypes = {
  media: PropTypes.object,
};

const defaultProps = {
  media: {},
};

const Schedule = ({ data }) => {
  return (
    <Row>
      <Col xs={0} md={2} />
      <Col xs={24} md={20}>
        <Row gutter={8} type="flex" justify="space-around" align="top">
          <Col xs={24} md={14}>
            <img
              className="jumbotron-bg"
              src={ScheduleImg}
              alt="Icon of Course Item"
            />
          </Col>
          <Col xs={24} md={10}>
            <h1>
              Class <span className="txt-violet-001">Schedules</span>
              <small>Choose from our various schedules</small>
            </h1>
            <p>
              Students may choose from our on-going class schedules, for more
              detailed information you can visit our calendar.
              <br />
              Or you can drop us a call:
            </p>
            <hr className="divider-md" />
            <Link to="/contact">
              <PrimaryButton label={'Contact Us'} />
            </Link>
            <p className="contact-number">
              (02) 710 8710
              <br />
              (02) 710 8724
            </p>
          </Col>
        </Row>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          {data.map(sched => {
            return (
              <Col key={sched.title} xs={24} sm={12} md={8}>
                {/* <div className="wrapper-course">
                  <div className="wrapper-course-badgetitle">
                    <p className="course-badgetitle">{sched.badgeTitle}</p>
                  </div>
                  <img
                    className="jumbotron-bg"
                    src={ScheduleImg}
                    alt="Icon of Course Item"
                  />
                </div> */}
                <p className="course-title">{sched.title}</p>
                <p className="course-subtitle">{sched.subTitle}</p>
                <p className="course-hours">{sched.hours}</p>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col xs={0} md={2} />
    </Row>
  );
};

Schedule.propTypes = propTypes;
Schedule.defaultProps = defaultProps;

export default Schedule;
