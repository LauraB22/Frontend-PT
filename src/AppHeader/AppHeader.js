import './appHeader.css';
import { Link } from "react-router-dom";

function AppHeader(){
    return(
        <header className="header">
            <Link to="/" className='linkdecor'>
                <h1> Phishmail</h1>
            </Link>
            
        </header>
        
    );
}
export {AppHeader};