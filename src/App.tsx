import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Common components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import MainPage from "./MainPage";
import CvPage from "./CvPage";
import ContactsPage from "./ContactsPage";

// Routing
import { routes } from "./data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header routes={routes} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
