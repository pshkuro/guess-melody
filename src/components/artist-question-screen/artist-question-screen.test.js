import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    id: 1234,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `John Snow`,
    id: 8879,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Jack Daniels`,
    id: 90,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Jim Beam`,
    id: 122,
  }],
};

it(`Render ArtistQuestionScreen`, () => {
  const onAnswerMock = jest.fn();
  const renderPlayer = jest.fn();

  const tree = renderer
  .create(
      <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswerMock}
        renderPlayer={renderPlayer}/>,
      {createNodeMock: () => {
        return {};
      }
      }

  );


  expect(tree).toMatchSnapshot();
});
