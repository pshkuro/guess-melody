import {GameType} from "../../constants/game.js";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import AudioPlayer from "../audio-player/audio-player.jsx";

export default class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }


  render() {
    const {onAnswer, question} = this.props;
    const {genre, answers} = question;
    const {answers: userAnsewrs} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}>

          {answers.map((answer, i) => (
            <div className="track" key={`${answer.id}-${answer.src}`}>
              <AudioPlayer
                isPlaying={i === 0}
                src={answer.src}/>
              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${answer.id}`}
                  id={`answer-${answer.id}`}
                  checked={userAnsewrs[i]}
                  onChange={(evt) => {
                    this._onChange(evt, i);
                  }}/>
                <label className="game__check" htmlFor={`answer-${answer.id}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }

  _onChange(evt, i) {
    const {answers: userAnsewrs} = this.state;
    const value = evt.target.checked;

    this.setState({
      answers: [...userAnsewrs.slice(0, i), value, ...userAnsewrs.slice(i + 1)],
    });
  }

}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        })
    ).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]),
  }).isRequired,
};

