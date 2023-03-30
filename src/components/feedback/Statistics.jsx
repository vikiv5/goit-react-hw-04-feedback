import React from "react";
import  PropTypes from "prop-types"
import {Container , Option } from './Statistics.styled'

const Statistics = ({good, neutral, bad , total, positivePercentage }) => {
    return ( <Container>
        <li>
            <Option>Good: {good}</Option>
            
        </li>
        <li>
            <Option>Neutral: {neutral}</Option>
            
        </li>
        <li>
            <Option>Bad: {bad}</Option>
    
        </li>

        <li>
            <Option>Total: {total}</Option>
        
        </li>

        <li>
            <Option>Positive feedback: {positivePercentage}%</Option>
        
        </li>
        
    </Container>

    )
}

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,


}

export default Statistics;