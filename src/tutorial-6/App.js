import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullPost } from "./components/FullArticle";

function App() {
  const pathname = window.location.pathname;

  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h1>Логин</h1>}
      {pathname.includes("/post/") && (
        <FullPost id={pathname.split("/").pop()} />
      )}
      <Footer />
    </>
  );
}

export default App;
