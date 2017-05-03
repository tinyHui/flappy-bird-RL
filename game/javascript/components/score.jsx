import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score, birdReachPipe, isVisible, scoreUp } = this.props;
    if (birdReachPipe) {
      scoreUp();
    }

    let classes = classnames({
      'hide': !isVisible,
      'score': true
    });

    return <div className={classes}>
      { score }
    </div>
  }
}

export default Score;
