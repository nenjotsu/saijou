import React from 'react';
import Loading from './Loading';

class Contact extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <iframe
            title="GoogleFormsSubmitContact"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeJ4XShhEcAJT_dFY50xqf5snheKD0Z5PorHaG1mlhk2HUt1w/viewform?embedded=true"
            width="640"
            height="1800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            <Loading />
          </iframe>
        </div>
      </section>
    );
  }
}

export default Contact;
