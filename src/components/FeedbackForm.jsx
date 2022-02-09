import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState('true')
    const [message, setMessage] = useState('')
    
    const handleTextChange=(e)=>{
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !=='' && text.trim().length<=5){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 charcters ')
        } else{
            setBtnDisabled(false)
            setMessage(null)
        }

         setText(e.target.value)
    }
  return <Card>
      <form>
          <h2>How would you rate us?</h2>
          <div className="input-group">
              <input type="text" onChange={handleTextChange}
              value={text} placeholder='Write a review' />
              <Button type="submit" isDisabled={btnDisabled}> 
                   Send
              </Button>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
  </Card>;
}

export default FeedbackForm;
