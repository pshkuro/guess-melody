import {mount} from "enzyme";
import React from "react";
import AudioPlayer from "./audio-player.jsx";

const props = {
  isPlaying: false,
  isLoading: false,
  onPlayButtonClick: jest.fn(),
  children: <div></div>,
};

it(`Audio Player to callback on audio click`, () => {
  const audioPlayer = mount(
      <AudioPlayer {...props}/>
  );

  const trackButton = audioPlayer.find(`.track__button`);
  trackButton.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(props.onPlayButtonClick).toHaveBeenCalledTimes(1);
});
