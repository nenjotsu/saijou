import React from 'react';
import RSOnLoad from '../transitions/OnLoad';

class Error404 extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <RSOnLoad>
            <h2>Error404 page</h2>
          </RSOnLoad>
        </div>
      </section>
    );
  }
}

export default Error404;
