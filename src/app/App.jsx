import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./containers/HomePage";
import { OurStory } from "./containers/OurStory";
import { OurTeam } from "./containers/OurTeam";
import { Contact } from "./containers/Contact";
import { Register } from "./containers/Register";
import { Debate } from "./containers/programs/Debate";
import { ModelUN } from "./containers/programs/ModelUN";
import { FourInOne } from "./containers/programs/FourInOne";
import { BusinessCase } from "./containers/programs/BusinessCase";
import { FridayWorkshops } from "./containers/programs/FridayWorkshops";
import { NewsAnalysis } from "./containers/programs/NewsAnalysis";
import { BrainBee } from "./containers/programs/BrainBee";
import { JSOC } from "./containers/programs/JSOC";
import { MockTrial } from "./containers/programs/MockTrial";
import Programs from "./containers/programs/Programs";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "./language/i18n";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/debate" element={<Debate />} />
          <Route path="/programs/mock-trial" element={<MockTrial />} />
          <Route path="/programs/model-un" element={<ModelUN />} />
          <Route path="/programs/4-in-1" element={<FourInOne />} />
          <Route path="/programs/business-case" element={<BusinessCase />} />
          <Route
            path="/programs/friday-workshops"
            element={<FridayWorkshops />}
          />
          <Route path="/programs/news-analysis" element={<NewsAnalysis />} />
          <Route path="/programs/jsoc" element={<JSOC />} />
          <Route path="/programs/brain-bee" element={<BrainBee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
