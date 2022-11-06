import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import SignPage from "../pages/sign";
import TodoPage from "../pages/todo";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/sign",
    element: <SignPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
]);
export default Routing;
