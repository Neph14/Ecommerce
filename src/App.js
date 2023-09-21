import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
import Footer from "./Components/UI/Footer";
import Navbar from "./Components/UI/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-center" />
    </Fragment>
  );
}

export default App;
