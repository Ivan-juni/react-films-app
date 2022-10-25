import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app__wrapper">
      <header>
        <Header />
      </header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
