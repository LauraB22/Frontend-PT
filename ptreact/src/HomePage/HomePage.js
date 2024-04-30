import "../App.css"
import React from "react";
import { AppHeader } from "../AppHeader/AppHeader.js";
import { AppBody } from "../AppBody/AppBody.js";
import { AppItem } from "../AppItem/AppItem.js";
import { AppFooter } from "../AppFooter/AppFooter.js";
import { useNavigate } from "react-router-dom";

function HomePage() {

  return (
    <>  
        {/*<AppHeader />*/}
        <AppItem/>
        <AppBody />
        {/*<AppFooter />*/}
      
    </>
  );
}

export {HomePage} ;
