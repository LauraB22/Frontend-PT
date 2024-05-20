// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import { HomePage } from "./HomePage/HomePage.js";
import { UploadMedia } from "./SubirArchivos/UploadMedia.js";
import { AppHeader } from "./AppHeader/AppHeader.js";
import { AppBody } from "./AppBody/AppBody.js";
import { AppItem } from "./AppItem/AppItem.js";
import { AppFooter } from "./AppFooter/AppFooter.js";
import {Tutorial} from "./Tutorial/Tutorial.js";
import {Results} from "./results/Results.js";
import { LoadingPage } from "./LoadingPage/LoadingPage.js";
import {InfoPhishing} from "./infoPhishing/InfoPhishing.js";
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
            <AppItem/>
            <AppBody />
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

          <Route exact path="/loading" element={<div>
            <LoadingPage/>
          </div>
          }/>

          <Route exact path="/tutorial" element={<div>
            <Tutorial/>
            <AppFooter/>
          </div>
          }/>

          <Route exact path="/InfoPhishing" element={<div>
            <InfoPhishing/>
            <AppFooter/>
          </div>
          }/>
        </Routes> 
      </>
    </Router>
    
  );
}

export default App;
