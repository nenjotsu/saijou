import React from 'react';
import RSOnLoad from '../transitions/OnLoad';

class Contact extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <RSOnLoad>
            <h2>Contact page</h2>
          </RSOnLoad>
        </div>
      </section>
    );
  }
}

export default Contact;
