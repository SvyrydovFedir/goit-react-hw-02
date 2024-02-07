export const Feedback = ({ feedbackCounts, totalFeedback, ratioCalculation }) => {
  return (
    <div>
        <ul>
          <li>Good: {feedbackCounts.good}</li>
          <li>Neutral: {feedbackCounts.neutral}</li>
          <li>Bad: {feedbackCounts.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {ratioCalculation}%</li>
        </ul>
    </div>
  );
};
