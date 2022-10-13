import React from "react";
import { Routers } from "../../routers/Routers";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <Routers />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
