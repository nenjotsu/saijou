import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import fetch from 'node-fetch';
import message from 'antd/lib/message';
import SubmitEmail from '../../components/SubmitEmail';

class Contact extends React.Component {
  state = {
    isSubmitted: false,
  };
  handleSubmit = values => {
    console.log('handleSubmit', values);
    const body = {
      from: values.email,
      subject: 'Received from Saijou.com.ph',
      text: `Hi my name is ${values.name},
      
       I'm interested in ${values.level}, ${values.message}
      
       Please contact me here ${values.phone}`,
      to: 'nenjotsu@gmail.com',
      // to: 'train@saijou-educ.com.ph',
    };

    // const domainApi = process.env.NODE_ENV ? 'localhos'
    try {
      fetch('http://saijou.com.ph:2233/api/v1/sendgrid/submit-email', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          message.success('Your email has been sent to us, thank you.');
          // this.setState({ isSubmitted: true });
        })
        .then(error => console.log(error));
    } catch (error) {}
  };
  render() {
    const { isSubmitted } = this.state;
    return (
      <section className="n-section contact-bg">
        <div className="Home-header">
          <Row>
            <Col xs={0} md={8} />
            <Col xs={24} md={8}>
              <div className="submit-email-form">
                <h2>We want to hear from you</h2>
                <SubmitEmail
                  onSubmit={this.handleSubmit}
                  isSubmitted={isSubmitted}
                />
              </div>

              {/* <iframe
                title="GoogleFormsSubmitContact"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeJ4XShhEcAJT_dFY50xqf5snheKD0Z5PorHaG1mlhk2HUt1w/viewform?embedded=true"
                width="640"
                height="1800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                <Loading />
              </iframe> */}
            </Col>
            <Col xs={0} md={8} />
          </Row>
        </div>
      </section>
    );
  }
}

export default Contact;
