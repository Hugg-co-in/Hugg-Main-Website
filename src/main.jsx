import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./navigation.jsx";
import { Provider } from "react-redux";
// import store from "./redux/store/store.js";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
