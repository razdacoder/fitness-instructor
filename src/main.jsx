import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./screens/Home.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import Routine from "./screens/Routine.jsx";
import WorkOut from "./screens/WorkOut.jsx";
import WelcomeScreen from "./screens/WelcomeScreen.jsx";
import Register from "./screens/Register.jsx";
import Login from "./screens/Login.jsx";
import Settings from "./screens/Settings.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Welcome",
    element: <WelcomeScreen />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "routine/:p_id",
    element: <Routine />,
  },
  {
    path: "workout/:id",
    element: <WorkOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
