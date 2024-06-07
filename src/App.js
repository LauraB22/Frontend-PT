// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import { HomePage } from "./HomePage/HomePage.js";
import { UploadMedia } from "./SubirArchivos/UploadMedia.js";
import { AppHeader } from "./AppHeader/AppHeader.js";
import { AppBody } from "./AppBody/AppBody.js";
import { AppFooter } from "./AppFooter/AppFooter.js";
import {Tutorial} from "./Tutorial/Tutorial.js";
import {TutorialGoogle} from "./TutorialGoogle/TutorialGoogle.js";
import { TutorialOutlook } from "./TutorialOutlook/TutorialOutlook.js";
import {Results} from "./results/Results.js";
import { LoadingPage } from "./LoadingPage/LoadingPage.js";
import {InfoPhishing} from "./infoPhishing/InfoPhishing.js";
import {FormasEstafa} from "./FormasEstafa/FormasEstafa.js";
import { ConsejosPhishing } from "./ConsejosPhishing/ConsejosPhishing.js";
import { Error } from "./Error/Error.js";
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
            <AppBody/>
            <AppFooter/>  
          </div>}
          />

          <Route exact path="/uploadMedia" element={<div>
            <UploadMedia/>
            <AppFooter/>  
          </div>}
          />

          <Route exact path="/Results" element={<div>
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

          <Route exact path="/tutorialGoogle" element={<div>
            <TutorialGoogle/>
            <AppFooter/>
          </div>
          }/>

          <Route exact path="/tutorialOutlook" element={<div>
            <TutorialOutlook/>
            <AppFooter/>
          </div>
          }/>

          <Route exact path="/InfoPhishing" element={<div>
            <InfoPhishing/>
            <AppFooter/>
          </div>
          }/>

          <Route exact path="/FormasEstafa" element={<div>
            <FormasEstafa/>
            <AppFooter/>
          </div>
          }/>

          <Route exact path="/ConsejosPhishing" element={<div>
            <ConsejosPhishing/>
            <AppFooter/>
          </div>
          }/>

          <Route exact path="/Error" element={<div>
            <Error/>
          </div>
          }/>
        </Routes> 
      </>
    </Router>
    
  );
}

export default App;
