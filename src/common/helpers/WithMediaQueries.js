import React from 'react';
import createMediaListener from './createMediaListener';

const withMedia = Comp => {
  const media = createMediaListener({
    big: '(min-width : 1175px)',
    tiny: '(max-width: 600px)'
  });

  return class WithMedia extends React.Component {
    state = {
      media: media.getState()
    };

    componentDidMount() {
      media.listen(media => this.setState({ media }));
    }

    componentWillUnmount() {
      media.dispose();
    }

    render() {
      return <Comp {...this.state} {...this.props} />;
    }
  };
};

export default withMedia;
