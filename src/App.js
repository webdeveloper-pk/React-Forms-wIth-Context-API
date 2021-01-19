import React from "react";
import UserForm from "./Components/UserForm";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={UserForm } />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
