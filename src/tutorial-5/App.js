import React from "react";
import ListReviews from "./components/List";
import FeedBack from "./components/Feedback";

//import

export default function App() {
  const [comments, setComments] = React.useState([]);
  const listReviewRef = React.useRef();

  React.useEffect(() => {
    const localComments = localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : [];
    setComments(localComments);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const sendComment = (fullName, email, text) => {
    let createdAt = `${new Date().toLocaleString("ru")}`;
    let newArr = { fullName, email, createdAt, text };
    setComments([...comments, newArr]);
  };

  const deleteComment = (indexList) => {
    const newArr = comments.filter(
      (comment, indexComment) => indexList !== indexComment
    );
    setComments(newArr);
  };
  return (
    <div>
      <ListReviews dataComments={comments} onDelteComment={deleteComment} />
      <FeedBack sendComment={sendComment} />
    </div>
  );
}
