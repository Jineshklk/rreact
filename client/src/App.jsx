import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
// import Single from "./pages/Single.jsx";
// import Write from "./pages/Write.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
