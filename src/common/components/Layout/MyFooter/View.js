import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import withMedia from '../../../helpers/WithMediaQueries';
// import RightArrow from '../../../images/right-arrow.png';
import MyFooterItem from '../../../images/course-item.png';
import FacebookGray from '../../../images/facebook-gray.png';
import YoutubeGray from '../../../images/youtube-gray.png';
import TwitterGray from '../../../images/twitter-gray.png';
import SaijouFooterGray from '../../../images/saijou-footer-gray.png';

const Search = Input.Search;

const propTypes = {
  media: PropTypes.object,
  footerServicesList: PropTypes.array,
  footerCompanyList: PropTypes.array,
  footerSupportList: PropTypes.array,
};

const defaultProps = {
  media: {},
  footerServicesList: [],
  footerCompanyList: [],
  footerSupportList: [],
};

const MyFooter = ({
  media,
  footerServicesList,
  footerCompanyList,
  footerSupportList,
}) => {
  const isTiny = media.tiny;
  const isBig = media.big;
  let textClass;
  textClass = isBig ? 'txt-big' : '';
  textClass = isTiny ? 'txt-tiny' : '';
  return (
    <Row>
      <Col xs={0} md={1} />
      <Col xs={24} md={22}>
        <Row gutter={8} type="flex" justify="space-around" align="left">
          <Col key="Services" xs={24} sm={12} md={6}>
            <h3>Services</h3>
            <ul className="footer-list">
              {footerServicesList.map(data => {
                return <li>{data.title}</li>;
              })}
            </ul>
          </Col>
          <Col key="Company" xs={24} sm={12} md={6}>
            <h3>Company</h3>
            <ul className="footer-list">
              {footerCompanyList.map(data => {
                return <li>{data.title}</li>;
              })}
            </ul>
          </Col>
          <Col key="Support" xs={24} sm={12} md={6}>
            <h3>Support</h3>
            <ul className="footer-list">
              {footerSupportList.map(data => {
                return <li>{data.title}</li>;
              })}
            </ul>
          </Col>
          <Col key="Support" xs={24} sm={12} md={6}>
            <h3>Subscribe in our mailing list</h3>
            <Search
              placeholder="name@email.com"
              enterButton="Subscribe"
              size="large"
              onSearch={value => console.log(value)}
            />

            <div className="footer-social">
              <a href="https://www.facebook.com/saijou.com.ph" target="_blank">
                <img src={FacebookGray} alt="facebook" />
              </a>
              {/* <img src={Twitter} alt="twitter" /> */}
              <a
                href="https://www.youtube.com/channel/UCqUmLvhanyzw4x65d736aDA"
                target="_blank"
              >
                <img src={YoutubeGray} alt="youtube" />
              </a>
            </div>

            <img
              className="footer-logo"
              src={SaijouFooterGray}
              alt="saijou logo footer"
            />
          </Col>
        </Row>
      </Col>
      <Col xs={0} md={1} />
    </Row>
  );
};

MyFooter.propTypes = propTypes;
MyFooter.defaultProps = defaultProps;

export default withMedia(MyFooter);
