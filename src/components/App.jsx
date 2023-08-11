import { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import { Container } from "./App.styled";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0, 
        bad: 0
    };

  onLeaveFeedback = (e) => {
      
    const name = e.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));

    };

    countTotalFeedback = (good, neutral, bad) => {
        return (good + neutral + bad)
    };

    countPositiveFeedbackPercentage = (good, total) => {
        if(!good) {return}
        return (Math.round((good / total) * 100))
    }

    render() {
      
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback (good, neutral, bad);
      const positivePercentage = this.countPositiveFeedbackPercentage(good, total);
      const options = Object.keys(this.state);


      return (<Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback } />
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
  
};
