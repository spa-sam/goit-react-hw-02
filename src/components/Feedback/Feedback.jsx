import css from './Feedback.module.css';

export const Feedback = ({ feedbacks, totalFeedback }) => {
  const positivePercentage = totalFeedback
    ? Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <div className={css.feedback}>
      <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
