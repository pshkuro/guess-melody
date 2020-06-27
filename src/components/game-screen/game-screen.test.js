import React from "react";
import renderer from "react-test-renderer";
import {GameScreen} from "./game-screen.jsx";
import {GameType} from "../../constants/game.js";

const props = {
  children: `<div className="children-component" />`,
  mistakes: 3,
};


describe(`GameScreen render correctly`, () => {

  it(`with ArtistQuestionScreen`, () => {
    const tree = renderer
    .create(
        <GameScreen
          type={GameType.ARTIST}
          {...props}/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with GenreQuestionScreen`, () => {
    const tree = renderer
    .create(
        <GameScreen
          type={GameType.GENRE}
          {...props}/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();

  });
});
