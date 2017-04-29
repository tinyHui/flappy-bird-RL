import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

class PipePair extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { pipePair, _ } = this.state;

    const pipePairStyle = {
      transform: `translate(-${pipePair.moveOffset}px, 0)`
    };
    
    const upperPipeStyle = {
      transform: `translate(0, ${pipePair.top.offset}px)`
    };

    const belowPipeStyle = {
      transform: `translate(0, -${pipePair.yWide - pipePair.top.offset}px)`
    };

    return <div className='pipe' style={pipePairStyle}>
      <div className='pipe-upper' style={upperPipeStyle}></div>
      <div className='pipe-below' style={belowPipeStyle}></div>
    </div>
  }
}

export default PipePair;
