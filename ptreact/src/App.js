import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { HomePage } from "./HomePage/HomePage.js";
import { UploadMedia } from "./SubirArchivos/UploadMedia.js";
import { AppHeader } from "./AppHeader/AppHeader.js";
import { AppFooter } from "./AppFooter/AppFooter.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* esto es para pruebas, solo eliminar los comentarios
    <div>
      <Router>
        <HomePage>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/uploadmedia" element={<UploadMedia/>}/>
          </Routes>
        </HomePage>
      </Router>
    </div>
  */}
      <AppHeader/>
      {/* pruebas, eliminar comentarios para probar la pagina de subir archivos UploadMedia*/ }
      <HomePage/>
      <AppFooter/>
    </>
  );
}

export default App;
