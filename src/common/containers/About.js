import React from 'react';
import RSOnLoad from '../transitions/OnLoad';

class About extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <RSOnLoad>
            <h1>About</h1>
            <p>
              Learning a new language is a little bit challenge and awesome at
              the same time, especially if you are not from a logographic
              writing system e.g. kanji.{' '}
              <strong>Saijou International Training Center, Inc</strong>. is a
              Japanese (nihongo) learning center to help you to have a new
              opportunity and a new life.
            </p>
            <h2>History</h2>
            <p>
              Saijou International Training Center, Inc. was founded in May 2018
              in Quezon City, Philippines, as a Japanese Learning Center.
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

            <p>Contact Email: training@saijou-educ.com.ph</p>

            <p>
              Address: Units 1402 and 1403 The One Executive Office Building, #5
              West Avenue, Nayong Kanluran, Quezon City, Second District,
              Philippines
            </p>

            <p>Numbers: (02) 710 8724, +63 9154082502</p>
            <p>
              Directions{' '}
              <a href="https://goo.gl/maps/dWVow59oK7z" target="_open">
                https://goo.gl/maps/dWVow59oK7z
              </a>
            </p>
          </RSOnLoad>
        </div>
      </section>
    );
  }
}

export default About;
