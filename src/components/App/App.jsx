import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';

export function App() {
  const defaultFeedbacks = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { ...defaultFeedbacks };
  });

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({ ...defaultFeedbacks });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return (
    <div className="App">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedbacks={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </div>
  );
}

export default App;
