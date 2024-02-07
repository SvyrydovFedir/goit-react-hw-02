
export const Options = ({updateGood, updateNeutral, updateBad, handleReset, typeOfFeedback}) => {
const isActive = typeOfFeedback.good || typeOfFeedback.neutral || typeOfFeedback.bad

  return (
    <div>
      <button onClick={updateGood}>Good</button>
      <button onClick={updateNeutral}>Neutral</button>
      <button onClick={updateBad}>Bad</button>
      {isActive ? <button onClick={handleReset}>Reset</button> : null}
    </div>
  );
};
