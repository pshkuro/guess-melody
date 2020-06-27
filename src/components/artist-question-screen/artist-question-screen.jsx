import React from "react";
import PropTypes from "prop-types";
import {GameType} from "../../constants/game.js";


export default function ArtistQuestionScreen({onAnswer, question, renderPlayer}) {
  const {answers: userAnswer, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}

        </div>
      </div>

      <form className="game__artist">
        {userAnswer.map((answer) => (
          <div className="artist" key={answer.artist}>
            <input className="artist__input visually-hidden"
              type="radio"
              name="answer"
              value={`answer-${answer.id}`}
              id={`answer-${answer.id}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${answer.id}`}>
              <img className="artist__picture" src={answer.picture} alt={`answer-${answer.id}`}/>
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );

}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};
