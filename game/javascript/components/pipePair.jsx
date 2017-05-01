import React from 'react'
import PropTypes from 'prop-types';

export default function Piping({ moveOffset, top, bottom }) {
  const pipePairStyle = {
    transform: `translate(-${moveOffset}px, 0)`
  };

  const upperPipeStyle = {
    transform: `translate(0, ${top}px)`
  };

  const belowPipeStyle = {
    transform: `translate(0, -${bottom}px)`
  };

  return <div className='pipe' style={pipePairStyle}>
    <div className='pipe-upper' style={upperPipeStyle}></div>
    <div className='pipe-below' style={belowPipeStyle}></div>
  </div>
}
