import React from 'react'
import PropTypes from 'prop-types'
import {Group, Image} from 'react-konva';

import { toImageDom } from '../utils'

export default function Piping({ moveOffset, top, bottom }) {
  const upperPipeImage = toImageDom('static/pipe-up.png');
  const bottomPipeImage = toImageDom('static/pipe-bottom.png');

  const pipePairStyle = {
    transform: `translate(-${moveOffset}px, 0)`
  };

  const upperPipeStyle = {
    transform: `translate(0, ${top}px)`
  };

  const belowPipeStyle = {
    transform: `translate(0, -${bottom}px)`
  };

  // return <div className='pipe' style={pipePairStyle}>
  //   <div className='pipe-upper' style={upperPipeStyle}></div>
  //   <div className='pipe-below' style={belowPipeStyle}></div>
  // </div>
  return <Group x={288 - moveOffset}>
    <Image image={upperPipeImage} y={top - 270}/>
    <Image image={bottomPipeImage} y={400 - bottom}/>
  </Group>
}
