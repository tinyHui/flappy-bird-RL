import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Bird from '../containers/bird.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    document.onkeypress = (event) => {
      this.state.triggerFly();
    }
  }

  render() {
    const { game } = this.state;
    const { isPlaying, score } = this.state.game;

    let landClasses = classnames({
      land: true,
      sliding: isPlaying,
    });

    return <div className='app'>
        <div className='scene'>
          <Bird />
        </div>
        <div className={landClasses}></div>
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
