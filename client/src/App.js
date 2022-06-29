import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alert from "./Components/layout/Alert";

//redux 
import {Provider} from 'react-redux'
import store from "./store";

const App = () => {
  return (
    <>
      <Provider store= {store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Alert/>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </Provider>``
    </>
  );
};

export default App;
