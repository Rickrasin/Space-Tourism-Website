import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home/Home";
import Destination from "./routes/Destination/Destination";
import Crew from "./routes/Crew/Crew";
import Technology from "./routes/Technology/Technology.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Destination", element: <Destination /> },
      { path: "/Crew", element: <Crew /> },
      { path: "/Technology", element: <Technology /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
