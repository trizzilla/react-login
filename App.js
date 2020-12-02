import React, { useState } from "react";
import LoginForm from "./component/counter";
//import UserInf from "./component/user";

function Index() {
  const adminUser = {
    name: "admin",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      console.log("Kuzu Zang Pola");
      setUser({
        name: details.name,
      });
    } else console.log("Naughty Boi");
  };

  const Logout = () => {
    //console.log("Logout");
    setUser({ name: "", password: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome">
          <h2>welcome</h2>
          <button onClick={Logout}>Log Out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Index;
