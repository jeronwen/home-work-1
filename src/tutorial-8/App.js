import React from "react";

function App() {
  const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    let response = await fetch(
      "https://627e50c2271f386ceff5ca21.mockapi.io/Users"
    );

    if (response.ok) {
      let usersArr = await response.json().catch((error) => alert(error));
      setUsers(usersArr);
    } else {
      alert("Ошибка " + response.status);
    }
  };
  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}

export default App;
