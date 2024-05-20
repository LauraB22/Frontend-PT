import subir from "../images/subir.png";
import './uploadMedia.css'
import { LoadingPage } from "../LoadingPage/LoadingPage.js";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function UploadMedia() {
  const [data, setData] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (file !== null) {
       fetchData();
     }
   }, [file]);

  const onFileChange = async (event) => {

    const selectedFile = event.target.files ? event.target.files[0] : event.dataTransfer.files[0];
    if(selectedFile){
      setFile(selectedFile);
      setFileName(selectedFile.name); 
      //fetchData();
  }
};

   const fetchData = async () => {
    setIsLoading(true);
    setError(null);
     try {
       const formData = new FormData();
       formData.append("mbox_file", file);
       const response = await fetch(
         "https://api.phishing-predict.xyz/upload-mbox",
         {
           method: "POST",
           body: formData,
         }
       );

       const result = await response.text();
       setData(result);
       navigate('/results', {state: {data:result}}); //aqui se navega a la otra pagina donde muestra los resultados
       //el state:{data:result} es para poder pasar datos entre componentes a traves de las rutas  
       // la función navigate permite pasar un objeto state como parte de su segundo argumento. 
       //Este objeto state es accesible en el componente de destino a través del hook useLocation. 
       //Este enfoque se utiliza para enviar datos de forma segura y privada entre rutas sin tener que usar la URL para almacenarlos
     } catch (error) {
        setError("Error fetching data: " + error.message);
        console.error("Error fetching data:", error);
        setIsLoading(false); 
     }
   };

   const handleDragOver = (event) => {
    event.preventDefault(); // Necesario para permitir el drop
  };

  const handleDrop = (event) => {
    event.preventDefault();
    onFileChange(event); // Reutiliza onFileChange para manejar archivos dropeados
  };


  return (
    <div className="uploadMedia"
      onDragOver={handleDragOver}
      onDrop={handleDrop}>

      {isLoading ? (
        <LoadingPage/>
      ) : (
       <>
          <h1>¿Tienes sospecha de que el correo electrónico es phishing?</h1>
          <h3>Sube tus correos a analizar en el formato .mbox</h3>
          <img src={subir} alt="" />
          <input type="file" 
            id="file-input"
            style={{ display: 'none' }}
            onChange={onFileChange} />
          <label htmlFor="file-input" className="buttonexaminar">
            {fileName || 'Subir Archivo'}
          </label>
          <p> O arrastra archivos aquí</p>  
        </>
      )}
    </div>
  );
}

export { UploadMedia };