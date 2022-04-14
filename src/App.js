import logo from "./logo.svg";
import "./App.css";
import { DIDCommentWithSession } from "did-comment-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginBottom: 0 }}>React App running in ABT Node</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <DIDCommentWithSession objId="test-id" color="green" />
      </header>
    </div>
  );
}

export default App;
