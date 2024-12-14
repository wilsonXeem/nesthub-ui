import "./App.css";
// import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import ListingPage from "./pages/ListingPage";
import LiveListingPage from "./pages/LiveListingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/listing/:location" element={<ListingPage />} />
            <Route exact path="/live/listing" element={<LiveListingPage />} />
          </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
