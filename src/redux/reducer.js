import {GameType} from "../constants/game.js";
import {questions} from "../mocks/questions.js";

const initialState = {
  mistakes: 0,
  step: -1,
  questions,
  maxMistakes: 3,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
      default:
        answerIsCorrect = false;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return Object.assign({}, initialState);
      }

      return Object.assign({}, state, { // state - old obj
        step: nextStep, // value that changed => redux compare
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= state.maxMistakes) {
        return Object.assign({}, initialState);
      }

      return Object.assign(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

