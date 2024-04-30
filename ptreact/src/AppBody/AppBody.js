import React from 'react';
import phish from '../images/que-es-phishing-pharming.jpg'
import './appBody.css';

function AppBody(){
    return(
        <div className='appBody'>
            <span className='presentacion'>
                <p> Phishmail es la herramienta que te ayudará a identificar los correos electrónicos que son un intento de estafa </p>
                <img src={phish} alt=""/>
            </span>
            <button className='buttonleer1' 
            onClick={
                (event)=>{
                    console.log('le diste clic boton 2')
                    console.log(event)
                    console.log(event.target)
                }
            }>Leer más</button>
        </div>


    );
}

export {AppBody};