import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";

function withAudio(Component) {

  class WithAudio extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying,
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const audio = this._audioRef.current;
      if (!audio) {
        return;
      }
      audio.src = src;

      audio.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      audio.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      audio.onpause = () => this.setState({
        isPlaying: false,
      });

      audio.ontimeupdate = () => this.setState({
        progress: audio.currentTime
      });
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    render() {
      const {isPlaying, isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayButtonClick={() => this._handlePlayButton()}
        >
          <audio ref={this._audioRef}/>
        </Component>
      );
    }

    _handlePlayButton() {
      const {onPlayButtonClick} = this.props;
      this.setState({isPlaying: !this.state.isPlaying});
      onPlayButtonClick();
    }
  }

  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
  };

  return WithAudio;

}

export default withAudio;


