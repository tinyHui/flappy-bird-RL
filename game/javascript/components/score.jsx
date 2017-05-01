import React from 'react'
import PropTypes from 'prop-types'

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score, birdReachPipe, scoreUp } = this.props;
    if (birdReachPipe) {
      scoreUp();
    }

    return <div className='score'>
      { score }
    </div>
  }
}

export default Score;
