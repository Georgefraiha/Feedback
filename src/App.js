import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as router, Route } from "react-router-dom";

function App() {
  const [feedbk, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      setFeedback(feedbk.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //console.log(newFeedback);
    setFeedback([newFeedback, ...feedbk]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedbk} />
        <FeedBackList feedback={feedbk} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
