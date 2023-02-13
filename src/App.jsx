import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Sponsors from "./pages/Sponsors/Sponsors";
import Events from "./pages/Events/Events";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

const NavbarWrapper = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      // VVV Put new routes here VVV
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/events",
        element: <Events />,
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
