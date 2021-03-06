import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

const props = {
  isPlaying: false,
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  onPlayButtonClick: jest.fn(),
};

it(`AudioPlayer render`, () => {
  const tree = renderer
  .create(
      <AudioPlayer {...props}/>,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
