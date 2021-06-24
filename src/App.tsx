import React, { useState } from "react";
import { Button } from "antd";
import logo from "./logo.svg";
import "./App.css";

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Antd!</p>
        <p>
          <Button type="primary" onClick={() => setCount((c) => c + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://ant.design/index-cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant Design
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
