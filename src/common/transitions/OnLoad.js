import React from 'react';
import { Transition } from 'react-spring';

class OnLoad extends React.Component {
  render() {
    const { children } = this.props;
    const show = true;
    return (
      <Transition
        items={show}
        from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        leave={{ opacity: 0.2, transform: 'translate3d(0,-10px,0)' }}
      >
        {show => show && (props => <div style={props}>{children}</div>)}
      </Transition>
    );
  }
}

export default OnLoad;
