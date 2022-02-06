import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedBackList({feedback, handleDelete}) {
   
    if (!feedback || feedback.length===0){
         return <p> No Feedback yet</p>
    }
  
  return (
  <div className="feedback-list">
      {feedback.map((item) =>(
          <FeedbackItem key={item.id} item={item} 
          handleDelete={handleDelete}/>
      ) 
      )}
  </div>
  )
}

FeedBackList.propTypes={
    //feedback: PropTypes.array.isRequired 
    // or we can do
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
             
        }
        )
    )
}
export default FeedBackList;
