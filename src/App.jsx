import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";


export const App = () => {
  const getFeedback = () => {
    const savedData = window.localStorage.getItem("data");
    if (savedData) {
      return JSON.parse(savedData);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  const [feedbackCounts, setTypeOfFeedback] = useState(getFeedback);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const updateGood = () => {
    setTypeOfFeedback({
      ...feedbackCounts,
      good: feedbackCounts.good + 1,
    });
  };

  const updateNeutral = () => {
    setTypeOfFeedback({
      ...feedbackCounts,
      neutral: feedbackCounts.neutral + 1,
    });
  }

  const updateBad = () => {
    setTypeOfFeedback({
      ...feedbackCounts,
      bad: feedbackCounts.bad + 1,
  })
}

  const handleReset = () => {
    setTypeOfFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

    const ratioCalculation = Math.round(
      ((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback) * 100
    );

  return (
    <>
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (<Feedback feedbackCounts={feedbackCounts} totalFeedback={totalFeedback} ratioCalculation={ratioCalculation} />) : (<Notification/>)}
    </>
  );
};
