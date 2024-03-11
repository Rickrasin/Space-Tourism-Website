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
import Data from "./data.json";


// Função para converter imagens para base64


const router = createBrowserRouter([
  {
    path: "/Space-Tourism-Website/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "Destination", element: <Destination destinations={Data.destinations} /> },
      { path: "Crew", element: <Crew crew={Data.crew} /> },
      { path: "Technology", element: <Technology technology={Data.technology} /> }
    ]
  }
]);

console.log(Data);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
