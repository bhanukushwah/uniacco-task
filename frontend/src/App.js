import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
