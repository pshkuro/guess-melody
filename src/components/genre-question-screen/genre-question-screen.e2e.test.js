import {shallow} from "enzyme";
import React from "react";
import GenreQuestionScreen from "./genre-question-screen.jsx";

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
        id: 545454545,
      },
      {
        src: `path`,
        genre: `jazz`,
        id: 8,
      },
      {
        src: `path`,
        genre: `jazz`,
        id: 34,
      },
      {
        src: `path`,
        genre: `blues`,
        id: 12,
      },
    ],
  },
};

describe(`GenreQuestionScreen`, () => {

  it(`When user answers genre question form is not sent`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();

    const genreQuestion = shallow(
        <GenreQuestionScreen
          question={question}
          onAnswer={onAnswer}
        />
    );

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });


  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const {question} = mock;
    const userAnswer = [false, true, false, false];
    const onAnswer = jest.fn((...args) => [...args]);

    const genreQuestion = shallow(
        <GenreQuestionScreen
          question={question}
          onAnswer={onAnswer}/>
    );

    const form = genreQuestion.find(`form`);
    const inputTwo = form.find(`input`).at(1); // at - index

    inputTwo.simulate(`change`, {
      target: {checked: true},
    });
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    // transmitted data have true structure
    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(
        genreQuestion.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(userAnswer); // toEqual compare (obj = obj or no)

  });
});


