import react from "react";

function apifacade() {
  function makeOptions(method, body) {
    var opts = {
      method: method,

      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }

    return opts;
  }
  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }

    return res.json();
  }

  const setToken = token => {
    localStorage.setItem("jwtToken", token);
  };

  function checkLogin(user) {
    const data = { username: user.username, password: user.password };

    const options = makeOptions("POST", data);

    fetch("http://localhost:8080/securitystarter/api/login", options)
      .then(handleHttpErrors)
      .then(res => {
        console.log("here11");
        console.log(res.token);
        setToken(res.token);
      });
  }
  return {
    checkLogin: checkLogin
  };
}

let facade = apifacade();
export default facade;
