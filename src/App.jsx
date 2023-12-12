import React from "react";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import ExperiencePage from "./components/experience/ExperiencePage";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/nav/NavBar";
import PortfolioPage from "./components/portfolio/PortfolioPage";


function App() {

  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App;
