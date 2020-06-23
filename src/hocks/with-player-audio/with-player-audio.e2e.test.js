import {mount} from "enzyme";
import React from "react";
import withActivePlayer from "./with-player-audio.jsx";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const props = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [
      {
        artist: `one`,
        picture: `pic-one`,
        id: 1234,
      }]
  }
};

it(`Click on track button leads to play or pause`, () => {
  const {question} = props;
  // eslint-disable-next-line react/prop-types
  const Component = ({renderPlayer}) => (<div>{
    renderPlayer(question.src, question.answers[0].id)
  }</div>);
  const WithPlayerAudio = withActivePlayer(Component);

  const wrappedComponent = mount(
      <WithPlayerAudio
        {...props}
      />
  );

  const audioPlayer = wrappedComponent.find(AudioPlayer).first();
  const trackButton = wrappedComponent.find(`.track__button`).first();

  trackButton.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(audioPlayer.state().isPlaying).toBe(false);
});
