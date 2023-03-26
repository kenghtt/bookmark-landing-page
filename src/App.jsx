import React from "react";

// components
import Header from "@layout/HeaderComponents/Header";
import Main from "@layout/MainContent/MainContent.jsx";
import Footer from "@layout/FooterComponents/Footer";

// styles 
import "./index.css";

function App() {

  return (
    <div className="App ring-black ring-20">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App
