import React from 'react';
import RSOnLoad from '../transitions/OnLoad';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class About extends React.Component {
  render() {
    return (
      <section className="n-section text-md">
        <div className="Home-header">
          <Row>
            <Col xs={0} md={2} />
            <Col xs={24} md={20}>
              <RSOnLoad>
                <h1>About</h1>
                <p>
                  Learning a new language is a little bit challenge and awesome
                  at the same time, especially if you are not from a logographic
                  writing system e.g. kanji.{' '}
                  <strong>Saijou International Training Center, Inc</strong>. is
                  a Japanese (nihongo) learning center to help you to have a new
                  opportunity and a new life.
                </p>
                <h2>History</h2>
                <p>
                  Saijou International Training Center, Inc. was founded in May
                  2018 in Quezon City, Philippines, as a Japanese Learning
                  Center.
                </p>

                <h2>Services</h2>
                <h3>TESDA Accredited Courses:</h3>
                <ul>
                  <li>Japanese Language & Culture N5 Level I - 320hrs</li>
                  <li>Japanese Language & Culture N4 Level II - 300hrs</li>
                </ul>
                <h3>Certificate Courses:</h3>
                <ul>
                  <li>Business Nihongo I - 24hrs</li>
                  <li>Business Nihongo II - 24hrs</li>
                </ul>
                <h3>Other Services:</h3>
                <ul>
                  <li>Nihongo Translation</li>
                  <li>Nihongo Interpretation</li>
                  <li>JPLT & JTest Review</li>
                  <li>Career Guidance</li>
                </ul>

                <hr />
                <h2>Contact</h2>
                <h3>Email:</h3>
                <p>training@saijou-educ.com.ph</p>

                <h3>Address:</h3>
                <p>
                  Units 1402 and 1403 The One Executive Office Building, #5 West
                  Avenue, Nayong Kanluran, Quezon City, Second District,
                  Philippines
                </p>

                <p>Numbers: (02) 710 8724, +63 9154082502</p>

                <h3>Google Maps</h3>
                <iframe
                  title="GoogleMaps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15441.284046064751!2d121.0248415!3d14.6377104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c3c014539e770ba!2sSaijou+International+Training+Center!5e0!3m2!1sen!2sph!4v1548005929446"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                />
                <p>
                  Directions{' '}
                  <a href="https://goo.gl/maps/dWVow59oK7z" target="_open">
                    https://goo.gl/maps/dWVow59oK7z
                  </a>
                </p>
              </RSOnLoad>
            </Col>
            <Col xs={0} md={2} />
          </Row>
        </div>
      </section>
    );
  }
}

export default About;
