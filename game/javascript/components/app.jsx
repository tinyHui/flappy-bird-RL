import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Stage, Layer, Group, Image} from 'react-konva';

import Bird from '../containers/bird'
import PipePairs from '../containers/pipePairs'
import Score from '../containers/score'
import { toImageDom } from '../utils'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skyImage: toImageDom('static/sky.png'),
      landImage: toImageDom('static/ground.png')
    }
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
    const { triggerFly, scoreUp } = this.props;
    const { width, height, landHeight } = this.props.game.world;
    const { isPlaying, score, isEnded } = this.props.game.game;

    let landClasses = classnames({
      land: true,
      sliding: isPlaying && !isEnded,
    });

    return <Stage width={width} height={height} onMouseDown={() => {
          if (this.props.game.isPlaying) {
            this.props.triggerFly();
          }}} onTouchStart={() => {
            if (this.props.game.isPlaying) {
              this.props.triggerFly();
            }}}>
      <Layer>
        <Group>
          <Image image={this.state.skyImage} />
          <PipePairs />
          <Image image={this.state.landImage} Y={landHeight} />
          <Bird />
          <Score />
        </Group>
      </Layer>
      </Stage>
  }
}

App.propTypes = {
  game: PropTypes.shape({
    world: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      landHeight: PropTypes.number.isRequired
    }).isRequired,
    game : PropTypes.shape({
      isPlaying: PropTypes.bool.isRequired,
      score: PropTypes.number.isRequired
    })
  }).isRequired,
  triggerFly: PropTypes.func.isRequired
};

export default App;
