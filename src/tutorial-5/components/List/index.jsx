import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import styles from "./List.module.scss";

const ListReviews = ({ dataComments }) => {
  const [commentsLocal, setCommentLocal] = React.useState([]);

  React.useEffect(() => {
    setCommentLocal(
      localStorage.getItem("comments")
        ? JSON.parse(localStorage.getItem("comments"))
        : []
    );
  }, []);

  const CommentsList = () => {
    let data = [];
    if (!dataComments.length) {
      data = commentsLocal;
    } else {
      data = dataComments;
    }
    return data.map((comment) => (
      <div key={comment.createdAt} className={styles.List}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="center">
            <ListItemAvatar>
              <AccountCircleIcon />
            </ListItemAvatar>
            <ListItemText
              primary={comment.fullName}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {comment.text}
                </React.Fragment>
              }
            />
            <p>{comment.createdAt}</p>
          </ListItem>
        </List>
      </div>
    ));
  };
  return (
    <div className={styles.wrapper}>
      <p>Отзывы:</p>
      {CommentsList()}
    </div>
  );
};

export default ListReviews;
