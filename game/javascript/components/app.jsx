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
        this.continueGame();
      } else if(event.keyCode === 96) {
        if (this.props.game.isPlaying) {
          this.props.stopGame();
        }
      }
    }
  }

  continueGame() {
    if (this.props.game.isPlaying) {
      this.props.triggerFly();
    } else {
      this.props.startGame();
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
        <div className='scene' onMouseDown={() => {
          if (this.props.game.isPlaying) {
            this.props.triggerFly();
          }}} onTouchStart={() => {
            if (this.props.game.isPlaying) {
              this.props.triggerFly();
            }}}>
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
