import "./style.css";
import React from "react";
import axios from "axios";
import { UserInfo } from "./UserCard";
const App = () => {
  const [account, setAccount] = React.useState("");
  const [result, setResult] = React.useState({});
  const [activate, setActivate] = React.useState(false);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const login = query.get("login");
    if (login) {
      setAccount(login);
      findAcc(login);
    }
  }, []);
  React.useEffect(() => {
    if (account !== "") {
      const handler = setTimeout(() => {
        findAcc(account);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    }
  }, [account]);

  const findAcc = async (login) => {
    setActivate(true);
    console.log(account);
    try {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      window.history.pushState("", "", `/?login=${login}`);

      setResult(response.data);
    } catch (error) {
      alert("Пользователь не найден!");
    }
    setActivate(false);
  };
  const onHandleChange = (e) => {
    setAccount(e.target.value);
  };
  return (
    <div class="app-container">
      <form class="app-form">
        <input
          type="text"
          class="app-input"
          value={account}
          onChange={onHandleChange}
          placeholder="Укажите GitHub-аккаунт"
        />
        <button
          disabled={activate}
          onClick={() => findAcc(account)}
          class="app-form_btn"
        >
          Найти
        </button>
      </form>
      {activate && (
        <p>
          <b>Идет загрузка...</b>
        </p>
      )}
      {}
      {Object.keys(result).length > 0 && <UserInfo result={result} />}
    </div>
  );
};

export default App;
