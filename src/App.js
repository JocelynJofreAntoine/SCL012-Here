import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./View/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./components/firebase";
import Layout from "./components/Layout";

// import UserAuth from './components/UserAuth.js'
// import Apigeofencing from './components/ApiGeofencing.js'

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState([]);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <Router>
      <Layout>
        <Switch>
          <Route path="/home-page" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Layout>
    </Router>
  ) : (
    <div id="loader">CircularProgress</div>
  );
}

export default App;
