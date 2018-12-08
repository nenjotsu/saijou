import React from 'react';
import RSOnLoad from '../transitions/OnLoad';

class About extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <RSOnLoad>
            <h2>About page</h2>
          </RSOnLoad>
        </div>
      </section>
    );
  }
}

export default About;
