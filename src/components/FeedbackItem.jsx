import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

 
function FeedbackItem({rating, text}) {
    

  return (
    <Card >
      <div className="num-display">{rating}</div>
      <button className="close"><FaTimes color="purple" /></button>
      <div className="text-display"> {text}</div>
    </Card>
  )
}

FeedbackItem.propTypes={
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
export default FeedbackItem;
