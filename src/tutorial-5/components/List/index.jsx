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
  return (
    <div className={styles.wrapper}>
      <h2>Отзывы:</h2>
      <div className={styles.List}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Bad Guy"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {"Anata no ken wa ka to onaji kurai tsuyoidesu"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default ListReviews;
