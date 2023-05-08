import React from 'react';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    switch (event.target.value) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;

      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;

      default:
        return;
    }
  };

  countTotalFeedback = () => {
    let totalFeedback = 0;
    const { good, neutral, bad } = this.state;
    totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    let percentage =
      totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    return (
      <div>
        <section title="Please, leave feedback!">
          <FeedbackOptions
            options={options}
            clickFeedback={this.addFeedback}
          ></FeedbackOptions>
        </section>
        <section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </section>
      </div>
    );
  }
}
export default App;
