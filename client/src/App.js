import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Dashboard from "./Components/dashboard/Dashboard";
import CreateProfile from "./Components/profile-form/CreateProfile";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./Components/routing/PrivateRoute";

//redux 
import {Provider} from 'react-redux'
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App= ()=>{
  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/create-profile"
              element={<PrivateRoute component={CreateProfile} />}
            />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

