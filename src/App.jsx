import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";

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

  const [typeOfFeedback, setType] = useState(getFeedback);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(typeOfFeedback));
  }, [typeOfFeedback]);

  const updateGood = () => {
    setType((prevFeedback) => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const updateNeutral = () => {
    setType((prevFeedback) => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  };

  const updateBad = () => {
    setType((prevFeedback) => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));
  };

  const handleReset = () => {
    setType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    typeOfFeedback.good + typeOfFeedback.neutral + typeOfFeedback.bad;

  return (
    <>
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        handleReset={handleReset}
        typeOfFeedback={typeOfFeedback}
      />
      <Feedback typeOfFeedback={typeOfFeedback} totalFeedback={totalFeedback} />
    </>
  );
};
