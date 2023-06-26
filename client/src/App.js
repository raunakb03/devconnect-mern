import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alert from "./Components/layout/Alert";
import Dashboard from "./Components/dashboard/Dashboard";
import EditProfile from "./Components/profile-form/EditProfile";
import CreateProfile from "./Components/profile-form/CreateProfile";
import Profile from "./Components/profile/Profile";
import AddExperience from "./Components/profile-form/AddExperience";
import AddEducation from "./Components/profile-form/AddEducation";
import Profiles from "./Components/profiles/Profiles";
import Posts from "./Components/posts/Posts";
import Post from "./Components/post/Post";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./Components/routing/PrivateRoute";

//redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <section>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route
                path="dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="/create-profile"
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path="/edit-profile"
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                path="/add-experience"
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path="/add-education"
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                path="/posts"
                element={<PrivateRoute component={Posts} />}
              />
              <Route
                path="/posts/:id"
                element={<PrivateRoute component={Post} />}
              />
            </Routes>
          </div>
        </Router>
      </Provider>
    </section>
  );
};

export default App;
