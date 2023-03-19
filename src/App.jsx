import React from "react";

// components
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Main from "./components/sections/Main";

// styles
import "./index.css";


function App() {

  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App
