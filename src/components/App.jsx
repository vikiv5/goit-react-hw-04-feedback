import {useState} from 'react'
import FeedbackOptions from './feedback/FeedbackOptions'
import Statistics from './feedback/Statistics';
import Section from './feedback/Section';
import Notification from './feedback/Notification';



const App =()=> {
const [good, setGood] = useState (0);
const [neutral,setNeutral] = useState (0);
const [bad, setBad] = useState (0);


const options = {
  good,neutral,bad
}

const handlClickButton =(e)=> {
    
  const key=e.target.name ; 


  switch (key) {
    case 'good':
      setGood(prevState=>prevState+1);
      break;

      case 'neutral':
      setNeutral(prevState=>prevState+1);
      break;

      case 'bad':
      setBad(prevState=>prevState+1);
      break;

      default:
        return ;
  }
      
    
};

const countTotalFeedback = () => {
  return good+neutral+bad;
};
const countPositiveFeedbackPercentage =() =>{

return Math.round((good/countTotalFeedback())*100);
    
    
}
return (
  <div>
    <div>
      <Section title="Please leave feedback" >
      <FeedbackOptions 
      options={Object.keys(options)} handlClickButton={handlClickButton}/>
      </Section>
    </div>

    <div>
      <Section title="Statistics" >
      {good === 0 && neutral === 0 && bad === 0 ? (
         <Notification message={"There is no feedback"}/> ) : (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        /> )
        
       }
      </Section>
    </div>
  </div>
)
}


export default App;

/*class App extends Component {
        
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };



  handlClickButton =(e)=>{
    
    let buttonName = e.target.name;
        
      if(buttonName){
        this.setState(prevState => 
          
        ({ [buttonName]: prevState[buttonName] +1})
        
      )};
  };

  countTotalFeedback = () => {

    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };


  countPositiveFeedbackPercentage =() =>{

    const totalFeedback = this.countTotalFeedback();
    const {good} = this.state;
    let result = 0;

    if(totalFeedback >0) {

       result = Math.ceil((good/totalFeedback)*100);
    }
    
    return `${result}%`;
    
  }

  

  render() {
    
    const {good, neutral, bad} = this.state; 
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage ();
    const countTotalFeedback = this.countTotalFeedback();
    const handlClickButton = this.handlClickButton;
    const feedbackBtn = Object.keys(this.state);
    
    
    
    return (
      <div>
        <div>
          <Section title="Please leave feedback" >
          {<FeedbackOptions nameBtn = {feedbackBtn} handlClickButton = {handlClickButton}></FeedbackOptions>}
          </Section>
        </div>

        <div>
          <Section title="Statistics" >
            {countTotalFeedback > 0 ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
            ) :
            <Notification message={"There is no feedback"}/>}
          </Section>
        </div>
      </div>
    )
  }

};
*/
