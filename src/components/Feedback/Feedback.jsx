export const Feedback = ({ typeOfFeedback, totalFeedback }) => {
  const ratioCalculation = Math.round(
    ((typeOfFeedback.good + typeOfFeedback.neutral) / totalFeedback) * 100
  );
  
  return (
    <div>
      {typeOfFeedback.good || typeOfFeedback.neutral || typeOfFeedback.bad ? (
        <ul>
          <li>Good: {typeOfFeedback.good}</li>
          <li>Neutral: {typeOfFeedback.neutral}</li>
          <li>Bad: {typeOfFeedback.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {ratioCalculation}%</li>
        </ul>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};
