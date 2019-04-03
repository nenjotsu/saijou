// import {
//   FacebookShareButton,
//   FacebookIcon,
//   FacebookShareCount,
//   TwitterShareButton,
//   TwitterIcon,
//   GooglePlusShareButton,
//   GooglePlusIcon,
//   GooglePlusShareCount,
// } from 'react-share';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import LazyLoad from 'react-lazy-load';
import RSOnLoad from '../../transitions/OnLoad';
import { getCourseSquareImg } from '../../helpers/CourseImg';

import { List, Icon } from 'antd';

const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  intl: PropTypes.object,
};

const defaultProps = {
  intl: {},
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Courses extends Component {
  render() {
    const { intl } = this.props;
    // const shareUrl = 'http://saijou.com.ph/courses';
    // const quoteText =
    //   'Visit our courses available, from N5 to Business Nihongo';

    // const hashtagText = '#SaijouKanjiDaily';
    // console.log('shareUrl', shareUrl);
    return (
      <section className="n-section courses-bg">
        <div className="Home-header">
          <Row>
            <Col xs={0} md={2} />
            <Col xs={24} md={20}>
              <h1>Courses</h1>
              <List
                itemLayout="vertical"
                size="small"
                dataSource={intl.messages.courses}
                footer={null}
                renderItem={item => (
                  <RSOnLoad>
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText type="clock-circle" text={item.hours} />,
                        <IconText type="tags" text={item.subTitle} />,
                        <IconText type="safety-certificate" text={item.tag} />,
                      ]}
                      extra={
                        <LazyLoad debounce={false} offsetVertical={500}>
                          <img
                            width={300}
                            alt="logo"
                            src={getCourseSquareImg(item.badgeTitle)}
                          />
                        </LazyLoad>
                      }
                    >
                      <List.Item.Meta
                        title={
                          item.title // avatar={<Avatar src={item.avatar} />}
                        }
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  </RSOnLoad>
                )}
              />
            </Col>
            <Col xs={0} md={2} />
          </Row>
        </div>
        {/* <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={quoteText}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          >
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <GooglePlusIcon size={32} round />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          >
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={quoteText}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div> */}
      </section>
    );
  }
}
Courses.propTypes = propTypes;
Courses.defaultProps = defaultProps;
export default Courses;
