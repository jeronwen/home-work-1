import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import styles from "./List.module.scss";
import IconButton from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ListReviews = ({ dataComments, onDelteComment }) => {
  return (
    <div className={styles.wrapper}>
      <p>Отзывы:</p>
      {dataComments.map((comment, index) => (
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
              <IconButton
                id={comment.createdAt}
                onClick={() => onDelteComment(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </List>
        </div>
      ))}
    </div>
  );
};

export default ListReviews;
