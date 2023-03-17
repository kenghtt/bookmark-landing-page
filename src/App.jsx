import React from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";


function App() {

  return (
    <div className="App">
        <Header/>
        <div className="w-20 h-20 bg-red-300"></div>
        <Footer/>
    </div>
  )
}

export default App
