import {shallow} from "enzyme";
import React from "react";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``
    },
    answers: [
      {
        artist: `one`,
        picture: `pic-one`,
      },
      {
        artist: `two`,
        picture: `pic-two`,
      },
      {
        artist: `three`,
        picture: `pic-three`,
      },
    ],
  }
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `one`,
    picture: `pic-one`,
  };

  const artistQuestion = shallow(
      <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswer}/>
  );

  const answerInputs = artistQuestion.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  // transmitted data have true structure
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

});
