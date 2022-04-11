import React from 'react';

function formatDate(date){ 
  return date.toLocaleDateString('ru',{day:"numeric", month:"long", year:"numeric"})
}

const ProfileFunc = (props) =>{
  return(
    <div>
      <p style={{fontSize: 32}}>Привет, <b>{props.name}!</b></p>
      <p style={{fontSize: 28}}>Дата регистрации: {formatDate(props.registredAt)}</p>
    </div>
  )  
}

class ProfileClass extends React.Component{
  render(){
    return(
      <div>
        <p style={{fontSize: 32}}>Привет, <b>{this.props.name}!</b></p>
        <p style={{fontSize: 28}}>Дата регистрации: {formatDate(this.props.registredAt)}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
