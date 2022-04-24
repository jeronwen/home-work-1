import React from "react";
import ListReviews from "./components/List";
import FeedBack from "./components/Feedback";

//import

export default function App() {
  const [comments, setComments] = React.useState([]);
  //{
  //  fullName: "Bad Guy",
  //  email: "vasya@mail.ru",
  //  createdAt: "Thu Oct 14 2021 13:41:01",
  //  text: "Anata no ken wa ka to onaji kurai tsuyoidesu",
  //},
  const sendComment = (fullName, email, text) => {
    let createdAt = `${new Date().toLocaleString("ru")}`;
    let newArr = { fullName, email, createdAt, text };
    setComments([...comments, newArr]);

    /// console.log(comments);
  };

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    console.log(comments);
  }, [comments]);
  return (
    <div>
      <ListReviews dataComments={comments} />
      <FeedBack sendComment={sendComment} />
    </div>
  );
}
