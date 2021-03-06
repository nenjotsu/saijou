import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import fb1Img from '../../../images/fb1.jpg';
import fb2Img from '../../../images/fb2.jpg';
import fb3Img from '../../../images/fb3.jpg';
import fb4Img from '../../../images/fb4.jpg';
import Facebook from '../../../images/facebook.png';

const propTypes = {
  media: PropTypes.object,
};

const defaultProps = {
  media: {},
};

const PhotoGallery = ({ data }) => {
  return (
    <Row>
      <Col xs={24}>
        <Row gutter={8} type="flex" justify="space-around" align="middle">
          <Col xs={24}>
            <p className="quote text-center">"Language CONNECTS People"</p>
            <p className="text-center">
              <a
                href="https://www.facebook.com/saijou.com.ph"
                target="_open"
              >
                <LazyLoad debounce={false} offsetVertical={500}>
                  <img className="icon-4x" src={Facebook} alt="Facebook" />
                </LazyLoad>
              </a>
              <br />
              <a
                href="https://www.facebook.com/saijou.com.ph"
                target="_open"
                className="see-more"
              >
                Follow us on Facebook
              </a>
            </p>
            <hr className="divider-md" />
          </Col>
        </Row>
        <Row gutter={1} type="flex" justify="space-around" align="middle">
          {data.map(photo => {
            let srcImg = '';
            switch (photo) {
              case '1':
                srcImg = fb1Img;
                break;
              case '2':
                srcImg = fb2Img;
                break;
              case '3':
                srcImg = fb3Img;
                break;
              case '4':
                srcImg = fb4Img;
                break;

              default:
                break;
            }
            if (srcImg === '') {
              return null;
            }
            return (
              <Col key={photo} xs={24} sm={12} md={6}>
                <a
                  href="https://www.facebook.com/saijou.com.ph"
                  className="no-underline"
                  target="_open"
                >
                  <LazyLoad debounce={false} offsetVertical={500}>
                    <img
                      className="jumbotron-bg"
                      src={srcImg}
                      alt="Facebook Thumbnail"
                    />
                  </LazyLoad>
                </a>
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

export default PhotoGallery;
