import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { HomePage } from "./HomePage/HomePage.js";
import { UploadMedia } from "./SubirArchivos/UploadMedia.js";
import { AppHeader } from "./AppHeader/AppHeader.js";
import { AppFooter } from "./AppFooter/AppFooter.js";
import {Tutorial} from "./Tutorial/Tutorial.js";
import {Results} from "./results/Results.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
      <AppHeader/>
        <Routes>
          <Route exact path="/"element={<div>
            <HomePage/>
            <AppFooter/>  
          </div>}
          />

          <Route exact path="/uploadMedia" element={<div>
            <UploadMedia/>
            <AppFooter/>  
          </div>}
          />

          <Route exact path="/results" element={<div>
            <Results/>
            <AppFooter/>  
          </div>}
          />

          <Route exact path="/como_usar_phishmail" element={<div>
            <Tutorial/>
            <AppFooter/>  
          </div>

          }/>
        </Routes>
      </>
    </Router>
    
  );
}

export default App;
