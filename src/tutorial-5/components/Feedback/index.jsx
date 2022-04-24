import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import styles from "./Feedback.module.scss";
import Button from "@mui/material/Button";

const FeedBack = ({ sendComment }) => {
  //console.log()
  let fullName;
  let email;
  let text;

  return (
    <div className={styles.Feedback}>
      <br></br>
      <h1>Обратная связь</h1>
      <div className={styles.DivFields}>
        <TextField
          margin="normal"
          id="outlined-multiline-flexible"
          label="Имя"
          multiline
          maxRows={4}
          onChange={(e) => {
            fullName = e.target.value;
          }}
          //        value={value}
          //          onChange={handleChange}
        />
        <TextField
          margin="normal"
          id="outlined-multiline-flexible"
          label="Почта"
          multiline
          maxRows={4}
          onChange={(e) => {
            email = e.target.value;
          }}
          // value={value}
          //  onChange={handleChange}
        />
        <TextField
          margin="normal"
          id="outlined-multiline-static"
          label="Текст..."
          multiline
          rows={4}
          onChange={(e) => {
            text = e.target.value;
          }}
        />
        <Button
          variant="contained"
          onClick={() => sendComment(fullName, email, text)}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
export default FeedBack;
