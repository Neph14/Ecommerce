import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
import Footer from "./Components/UI/Footer";
import Navbar from "./Components/UI/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="overflow-x-hidden">
          <Navbar />
          <Pages />
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
