// import React from 'react';
// class BuggyComponent extends React.Component {
//   render() {
//     throw new Error('I crashed!');
//   }
// }

const BuggyComponent = () => {
  throw new Error('I crashed!');
};


export default BuggyComponent;
