import { createBrowserRouter } from "react-router-dom";

// ++++++++++++++++++++++++++++++++++++++++++++
import HomePage from "./pages/HomePage";
import App from "./App";
import Test from "./pages/Test";
import Psychologist from "./components/Home/Psychologist/Psychologist";

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
        path: "booking",
        element: <Psychologist />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
