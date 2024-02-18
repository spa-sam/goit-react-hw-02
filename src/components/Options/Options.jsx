import css from './Options.module.css';

export const Options = ({ updateFeedback, resetFeedback, totalFeedbacks }) => {
  const handleGoodClick = () => updateFeedback('good');
  const handleNeutralClick = () => updateFeedback('neutral');
  const handleBadClick = () => updateFeedback('bad');
  const handleResetClick = () => resetFeedback();

  return (
    <div>
      <button className={css.optionButton} onClick={handleGoodClick}>
        Good
      </button>
      <button className={css.optionButton} onClick={handleNeutralClick}>
        Neutral
      </button>
      <button className={css.optionButton} onClick={handleBadClick}>
        Bad
      </button>
      {totalFeedbacks > 0 && (
        <button className={css.optionButton} onClick={handleResetClick}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
