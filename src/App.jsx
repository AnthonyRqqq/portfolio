import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <header style={{ paddingTop: '1rem'}}>
        <h3>
          <Navigation />
        </h3>
      </header>

      <main className="main" style={{ paddingTop: '5rem'}}>
        <Outlet />
      </main>
    </div>
  );
}
