import './appHeader.css';
import { Link } from "react-router-dom";
import logo from "../images/phishing.png";

function AppHeader(){
    return(
        <header className="header">
            <Link to="/" className='linkdecor'>
                <img src={logo} className="logo" alt='' />
                <h1> Phishmail</h1>
            </Link>
            
        </header>
        
    );
}
export {AppHeader};