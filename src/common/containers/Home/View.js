import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import RSOnLoad from '../../transitions/OnLoad';

const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  intl: PropTypes.object,
};

const defaultProps = {
  intl: {},
};

// const ComingSoon = Loadable({
//   loader: () => import('./components/ComingSoon'),
//   loading: () => null,
// });

const Jumbotron = Loadable({
  loader: () => import('./components/Jumbotron'),
  loading: () => null,
});

const Courses = Loadable({
  loader: () => import('./components/Courses'),
  loading: () => null,
});

const Schedule = Loadable({
  loader: () => import('./components/Schedule'),
  loading: () => null,
});

const FeaturedSensei = Loadable({
  loader: () => import('./components/FeaturedSensei'),
  loading: () => null,
});

// const LatestNews = Loadable({
//   loader: () => import('./components/LatestNews'),
//   loading: () => null,
// });

const PhotoGallery = Loadable({
  loader: () => import('./components/PhotoGallery'),
  loading: () => null,
});

const EnrollNow = Loadable({
  loader: () => import('./components/EnrollNow'),
  loading: () => null,
});
const Partners = Loadable({
  loader: () => import('./components/Partners'),
  loading: () => null,
});

class Home extends Component {
  render() {
    const { intl, reduxAction } = this.props;
    return (
      <main>
        {/* <section className="n-section bg-white">
          <RSOnLoad>
            <ComingSoon />
          </RSOnLoad>
        </section> */}
        <section className="n-section-jumbotron bg-white cover-bg">
          <RSOnLoad>
            <Jumbotron data={intl.messages.jumbotron} />
          </RSOnLoad>
        </section>
        <section className="n-section bg-white">
          <RSOnLoad>
            <Courses data={intl.messages.courses} reduxAction={reduxAction} />
          </RSOnLoad>
        </section>
        <section className="n-section bg-gray-001">
          <RSOnLoad>
            <Schedule data={intl.messages.schedules} />
          </RSOnLoad>
        </section>
        <section className="n-section bg-white">
          <RSOnLoad>
            <FeaturedSensei data={intl.messages.featuredSensei} />
          </RSOnLoad>
        </section>

        {/* <section className="n-section bg-maroon">
          <RSOnLoad>
            <LatestNews data={intl.messages.schedules} />
          </RSOnLoad>
        </section> */}
        <section className="n-section bg-white">
          <RSOnLoad>
            <PhotoGallery data={intl.messages.photoGallery} />
          </RSOnLoad>
        </section>
        <section className="n-section-sm bg-gray-001">
          <RSOnLoad>
            <EnrollNow />
          </RSOnLoad>
        </section>
        <section className="n-section bg-white">
          <RSOnLoad>
            <Partners data={intl.messages.courses} />
          </RSOnLoad>
        </section>
      </main>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
