import { useState } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import { Container } from "./App.styled";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = (e) => {
      
    const name = e.target.name;

    switch (name) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break

      case "bad":
        setBad(bad + 1);
        break;

      default: return;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
        return (good + neutral + bad)
    };

  const  countPositiveFeedbackPercentage = (good, total) => {
        if(!good) {return}
        return (Math.round((good / total) * 100))
    }


const total = countTotalFeedback (good, neutral, bad);
const positivePercentage = countPositiveFeedbackPercentage(good, total);
  
  return (<Container>
        <Section title="Please leave feedback">
      <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={onLeaveFeedback } />
        </Section>
        
        <Section title="Statistics">
          {
            total !==0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
              positivePercentage={positivePercentage} />) : <Notification message="There is no feedback" />
          }
          
        </Section>
        
      </Container>
        
    );
    };


