import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Stats from "./components/Stats";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";


function App() {
  return (
  <div className="app-container">
    <Navbar />
    <Hero />
    <FeatureCards />
    <Stats />
    <Upload />
    <Footer />
  </div>
);
}

export default App;