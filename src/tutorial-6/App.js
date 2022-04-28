import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullPost } from "./components/FullArticle";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  const pathname = window.location.pathname;

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h1>Логин</h1>} />
        <Route path="/post/:id" element={<FullPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
