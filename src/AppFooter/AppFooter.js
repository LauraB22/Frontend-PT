import './appFooter.css';
import ipn from "../images/ipn.png";
import upiita from "../images/upiita.png";

function AppFooter(){
    return(
        <footer className='appfooter'>
            <img src={ipn} alt=""/>
            <p> Proyecto Terminal </p>
            <p>Ingeniería Telemática</p>
            <p>Presentado por:</p>
            <p>Bazaldua Monroy Laura</p>
            <p>Martín Moreno Cesar Sadrak</p>
            <img src={upiita} alt=""/>
        </footer>
            
    );
      
}
export {AppFooter};