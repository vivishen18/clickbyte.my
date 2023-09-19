import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import CountDown from "./routes/CountDown";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set a suitable time in milliseconds
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<CountDown />} />
        </Routes>
      )}
    </>
  );
}

export default App;
