import { createBrowserRouter } from "react-router-dom";

// ++++++++++++++++++++++++++++++++++++++++++++
import HomePage from "./pages/HomePage";
import App from "./App";
import Test from "./pages/Test";

// ################ Router ###################

// ++++++++++++++++++++++++++++++++++++++++++

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
