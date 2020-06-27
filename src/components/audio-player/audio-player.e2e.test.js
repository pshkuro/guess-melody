import {mount} from "enzyme";
import React from "react";
import AudioPlayer from "./audio-player.jsx";

const props = {
  isPlaying: false,
  isLoading: false,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  onPlayButtonClick: jest.fn(),
};

it(`Audio Player play music by click`, () => {
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  const audioPlayer = mount(
      <AudioPlayer {...props}/>
  );

  const trackButton = audioPlayer.find(`.track__button`);
  audioPlayer.setState({isLoading: false});
  trackButton.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(audioPlayer.state().isPlaying).toBe(true);
});
