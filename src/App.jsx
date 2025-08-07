import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Hair from "./components/pages/Hair";
import Beauty from "./components/pages/Beauty";
import Discount from "./components/pages/Discount";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pricing"
          element={
            <>
              <Hair />
              <Beauty />
              <Discount />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
