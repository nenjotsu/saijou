// import React from 'react';
// import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
// import PropTypes from 'prop-types';

// const propTypes = {
//   data: PropTypes.object.isRequired
// };

// const Page = ({ offset, caption, first, second, gradient, onClick }) => (
//   <React.Fragment>
//     <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//       <div className="slopeBegin" />
//     </ParallaxLayer>

//     <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
//       <div className={`slopeEnd ${gradient}`} />
//     </ParallaxLayer>

//     <ParallaxLayer className="text number" offset={offset} speed={0.3}>
//       <span>0{offset + 1}</span>
//     </ParallaxLayer>

//     <ParallaxLayer className="text header" offset={offset} speed={0.4}>
//       <span>
//         <p style={{ fontSize: 20 }}>{caption}</p>
//         <div className={`stripe ${gradient}`} />
//         <p>{first}</p>
//         <p>{second}</p>
//       </span>
//     </ParallaxLayer>
//   </React.Fragment>
// );

// class Jumbotron extends React.Component {
//   scroll = to => this.refs.parallax.scrollTo(to);
//   render() {
//     return (
//       <Parallax
//         className="container"
//         ref="parallax"
//         pages={3}
//         horizontal
//         scrolling={false}
//       >
//         <Page
//           offset={0}
//           gradient="pink"
//           caption="who we are"
//           first="Loream Ipsum"
//           second="dolor sit"
//           onClick={() => this.scroll(1)}
//         />
//         <Page
//           offset={1}
//           gradient="teal"
//           caption="what we do"
//           first="consectetur"
//           second="adipiscing elit"
//           onClick={() => this.scroll(2)}
//         />
//         <Page
//           offset={2}
//           gradient="tomato"
//           caption="what we want"
//           first="Morbi quis"
//           second="est dignissim"
//           onClick={() => this.scroll(0)}
//         />
//       </Parallax>
//     );
//   }
// }

// Jumbotron.propTypes = propTypes;
// export default Jumbotron;
