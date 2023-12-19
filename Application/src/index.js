import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<Router>
  <App />
</Router>);