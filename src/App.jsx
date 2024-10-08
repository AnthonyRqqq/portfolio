import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <div
      style={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div style={{ flexGrow: location.pathname === "/" ? 0 : 1 }}>
        <header style={{ paddingTop: "1rem" }}>
          <h3>
            <Navigation />
          </h3>
        </header>

        <main className="main" style={{ paddingTop: "5rem" }}>
          <Outlet />
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
