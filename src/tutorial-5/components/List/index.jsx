import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "./List.module.scss";

const ListReviews = () => {
  let arrOfComments = [];

  React.useEffect(() => {
    console.log("DID MOUNT");
    let arrOfComments = localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : [];
  });

  console.log(arrOfComments);
  return (
    <div className={styles.wrapper}>
      <h2>Отзывы:</h2>
      {arrOfCommentsarrOfComments.map((comment, index) => (
        <div key={index} className={styles.List}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
            </ListItem>
          </List>
        </div>
      ))}
    </div>
  );
};

export default ListReviews;
