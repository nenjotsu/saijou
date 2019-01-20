import React from 'react';

class News extends React.Component {
  render() {
    return (
      <section className="n-section">
        <div className="Home-header">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/saijou.com.ph/"
            data-tabs="timeline"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/saijou.com.ph/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/saijou.com.ph/">
                Saijou International Training Center, Inc.
              </a>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
