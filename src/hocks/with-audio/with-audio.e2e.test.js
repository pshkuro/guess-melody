import React from "react";
import PropTypes from "prop-types";
import {mount} from "enzyme";
import withAudio from "./with-audio.jsx";


const Player = (props) => {
  const {onPlayButtonClick, children} = props;
  return (
    <div>
      <button onClick={onPlayButtonClick} />
      {children}
    </div>
  );
};

Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const props = {
  onPlayButtonClick: jest.fn(),
  src: ``,
};

describe(`With-audio Hoc tests`, () => {
  it(`Checks that HOC's callback turn on audio (play)`, () => {
    const PlayerWrapped = withAudio(Player);
    const wrapper = mount(<PlayerWrapped
      {...props}
      isPlaying={true}/>);

    window.HTMLMediaElement.prototype.play = jest.fn();

    const {_audioRef} = wrapper.instance();

    jest.spyOn(_audioRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.find(`button`).simulate(`click`);

    expect(_audioRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that HOC's callback turn off audio (pause)`, () => {
    const PlayerWrapped = withAudio(Player);
    const wrapper = mount(<PlayerWrapped
      {...props}
      isPlaying={false}
    />);

    window.HTMLMediaElement.prototype.pause = () => {};

    const {_audioRef} = wrapper.instance();

    jest.spyOn(_audioRef.current, `pause`);

    wrapper.instance().componentDidMount();

    wrapper.find(`button`).simulate(`click`);

    expect(_audioRef.current.pause).toHaveBeenCalledTimes(1);
  });
});


