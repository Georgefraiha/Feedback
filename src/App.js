import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedbk, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedbk} />
      </div>
    </>
  );
}

export default App;
