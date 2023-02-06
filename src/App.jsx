import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navigation/Navbar";
import About from "./pages/About/About";

import "./App.css";
import Footer from "./components/Footer/Footer";

const NavbarWrapper = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
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
