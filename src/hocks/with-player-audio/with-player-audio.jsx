import React, {PureComponent} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player.jsx';
import withAudio from "../with-audio/with-audio.jsx";

const AudioPlayerWrapped = withAudio(AudioPlayer);

export default function withActivePlayer(Component) {

  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: -1,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <AudioPlayerWrapped
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this._handlePlayButton(id)}
            />
          );
        }}
      />;
    }

    _handlePlayButton(checkedId) {
      const {activePlayerId} = this.state;
      this.setState({
        activePlayerId: activePlayerId === checkedId ? -1 : checkedId
      });
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
}


