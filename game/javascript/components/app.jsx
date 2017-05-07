import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Bird from '../containers/bird'
import PipePairs from '../containers/pipePairs'
import Score from '../containers/score'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.onkeypress = (event) => {
      if (event.keyCode === 32) {
        this.props.triggerFly();
      } else if (event.keyCode === 13) {
        if (!this.props.game.isPlaying) {
          this.props.startGame();
        }
      } else if(event.keyCode === 96) {
        if (this.props.game.isPlaying) {
          this.props.stopGame();
        }
      }
    }
  }

  render() {
    const { game, triggerFly, scoreUp } = this.props;
    const { isPlaying, score, isEnded } = this.props.game;

    let landClasses = classnames({
      land: true,
      sliding: isPlaying && !isEnded,
    });

    return <div className='app'>
        <Score />
        <div className='scene' onMouseDown={triggerFly} onTouchStart={triggerFly}>
          <Bird />
          <PipePairs />
          <div className={landClasses}></div>
        </div>
      </div>
  }
}

App.propTypes = {
  game: PropTypes.shape({
      isPlaying: PropTypes.bool.isRequired,
      score: PropTypes.number.isRequired
  }).isRequired,
  triggerFly: PropTypes.func.isRequired
};

export default App;
