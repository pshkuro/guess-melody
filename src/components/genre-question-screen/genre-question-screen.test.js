import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
    id: 11,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
    id: 33,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
    id: 89,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
    id: 12,
  }]
};


it(`Render GenreQuestionScreen`, () => {
  const onAnswerMock = jest.fn();
  const onRenderPlayerMock = jest.fn();

  const tree = renderer
  .create(
      <GenreQuestionScreen
        onAnswer={onAnswerMock}
        question={question}
        renderPlayer={onRenderPlayerMock}
      />,
      {createNodeMock: () => {
        return {};
      }
      });

  expect(tree).toMatchSnapshot();
});
