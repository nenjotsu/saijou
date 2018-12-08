import React from 'react';
import RSOnLoad from '../transitions/OnLoad';

class Schedule extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <RSOnLoad>
            <h2>Schedule page</h2>
          </RSOnLoad>
        </div>
      </section>
    );
  }
}

export default Schedule;
