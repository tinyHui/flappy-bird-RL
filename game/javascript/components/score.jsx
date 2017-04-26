import React from 'react'

export default function Score(props) {
  const {score} = props;
  
  return <div className='score'>
    {score}
  </div>
}
