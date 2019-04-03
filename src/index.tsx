import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import { UserProvider, UserContext } from "./UserProvider";

interface Props {}

const Hello: React.FC<Props> = props => {
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return <h1>Hallo {ctx.user.name}</h1>;
};

const Input = () => {
  const ctx = React.useContext(UserContext);
  const { user, setUser } = ctx;
  return (
    <input
      value={user.name}
      onChange={e => {
        setUser({ ...user, name: e.target.value });
      }}
      placeholder="Enter user name"
    />
  );
};

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Input />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Hello />
      </div>
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
