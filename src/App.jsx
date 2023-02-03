import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
