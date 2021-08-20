import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <HashRouter>
      <div className="d-flex">
        <Header />

        <Footer />
      </div>
    </HashRouter>
  );
}
