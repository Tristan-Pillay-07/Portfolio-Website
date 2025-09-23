import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Qualifications from "./Components/Qualifications/Qualifications";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <hr className="line-across" />
      <About />
      <hr className="line-across" />
      <Projects />
      <hr className="line-across" />
      <Qualifications />
      <hr className="line-across" />
      <Work />
      <Footer />
    </>
  );
}

export default App;
