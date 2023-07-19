import {  useState } from 'react'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Section } from 'components/Section/Section'
import { Notification } from 'components/Notification/Notification'
import { Container } from './App.styled';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = key => {
    switch (key) {
      case "good":
        setGood(prevState => prevState + 1)
        console.log('ляляля')
        break;
      
      case "neutral":
        setNeutral(prevState => prevState + 1)
        break;
      
      case "bad":
        setBad(prevState => prevState + 1)
        break;
    
      default:
        break;
    }
    
  }
  const total = good + neutral + bad;
  const feedback = total > 0;

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
            return 0
    }
    
    const positive = (good / total) * 100;
        return Math.round(positive)
  }

 return <Container>
          <Section title="Please leave feedback">
          <FeedbackOptions
       options={["good", "neutral", "bad"]}
            handleClick={handleClick}
          ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {
              feedback ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positive={countPositiveFeedbackPercentage()}
              ></Statistics> :
                <Notification message="There is no feedback" />
            }
            </Section>
            </Container>
}

export default App