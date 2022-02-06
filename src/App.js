import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedbk, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      setFeedback(feedbk.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedbk} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
