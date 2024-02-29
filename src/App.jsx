// import { Footer, Home, Navbar } from "./compontents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/contact",
        element: <h1>Hello contact</h1>,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
