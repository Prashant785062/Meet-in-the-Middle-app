import { Outlet } from "react-router-dom";
import Header from "../CompoCollector/Header";
import Footer from "../CompoCollector/Footer";
import { Container } from "@mui/material";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <Container maxWidth="lg" className="flex-grow px-2 sm:px-4 md:px-6 lg:px-8 py-4">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
}
