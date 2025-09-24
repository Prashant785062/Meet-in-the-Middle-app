import { Outlet } from "react-router-dom";
import Header from "../CompoCollector/Header";
import Footer from "../CompoCollector/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header stays at top */}
      <Header />

      {/* Page Content changes here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}
