import PropTypes from 'prop-types';
import { BoxBtn, Button } from './Feedback.styled'

  export const FeedbackOptions = ({options, handlClickButton}) => {
    
   return (
    <BoxBtn>
          {options.map(option => (
        <Button key={option} onClick={handlClickButton} name={option}>
          {option}
        </Button>
       ))}
    </BoxBtn>

   );
};

FeedbackOptions.propTypes ={
    handlClickButton: PropTypes.func.isRequired,
               
};


export default FeedbackOptions;