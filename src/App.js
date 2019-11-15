import React, { useState } from "react";
import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import facade from "./apifacade";
function App() {
  const initalstate = { username: "", password: "" };
  const [user, setUser] = useState(initalstate);

  function HandleInput(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setUser({ ...user, [id]: value });
    console.log(user);
  }

  function HandleSubmit(event) {
    facade.checkLogin(user);
  }
  return (
    <div className="App">
      <form onSubmit={HandleSubmit} onChange={HandleInput}>
        <input type="text" id="username" placeholder="Enter username" />
        <input type="text" id="password" placeholder="Enter password" />
        <button type="submit" value="Submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
