import React from "react";
import ListReviews from "./components/List";
import FeedBack from "./components/Feedback";

//import

export default function App() {
  const [comments, setComments] = React.useState({});
  return (
    <div>
      <ListReviews />
      <FeedBack />
    </div>
  );
}
