import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class GenreQuestionItem extends PureComponent {
  render() {
    const {answer, id, onChange, renderPlayer, userAnswer} = this.props;
    const handleChange = (evt, checkedId) => {
      const value = evt.target.checked;

      onChange(checkedId, value);
    };
    return (
      <div className="track">
        {renderPlayer(answer.src, id)}
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${id}`}
            id={`answer-${id}`}
            checked={userAnswer}
            onChange={(evt) => handleChange(evt, id)}
          />
          <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

GenreQuestionItem.propTypes = {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswer: PropTypes.bool.isRequired,
};


export default GenreQuestionItem;
