import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

import "./App.css";

const NavbarWrapper = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
