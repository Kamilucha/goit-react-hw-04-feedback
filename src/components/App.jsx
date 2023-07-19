import { Component } from 'react'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Section } from 'components/Section/Section'
import { Notification } from 'components/Notification/Notification'
import { Container } from './App.styled';

class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
 }
  
 handleClick= key =>{
        this.setState(prevState => {
        return { [key]: prevState[key] + 1 }
    })
 }
  
      countTotalFeedback = () => {
        const { good, neutral, bad, } = this.state
        const total = good + neutral + bad;
        return total
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state
        const total = this.countTotalFeedback()
        if (total === 0) {
            return 0
        }
        const positiveFeedback = (good / total) * 100;
        return Math.round(positiveFeedback)
    }
  
   render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback()
     const positive = this.countPositiveFeedbackPercentage()
     const feedback = total > 0;
     
        return <Container>
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleClick={this.handleClick}
          ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {
              feedback ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positive={positive}
              ></Statistics> :
                <Notification message="There is no feedback" />
            }
            </Section>
            </Container>
    }
  
};

export default App
