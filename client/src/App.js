import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alert from "./Components/layout/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

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
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

