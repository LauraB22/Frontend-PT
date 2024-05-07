import subir from "../images/subir.png";
import './uploadMedia.css'


function UploadMedia() {
  const [data, setData] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file !== null) {
       fetchData();
     }
   }, [file]);

  const onFileChange = (event) => {
     setFile(event.target.files[0]);
  };

   const fetchData = async () => {
     try {
       const formData = new FormData();
       formData.append("mbox_file", file);
       const response = await fetch(
         "http://phishing-prediction.us-east-2.elasticbeanstalk.com/upload-mbox",
         {
           method: "POST",
           body: formData,
         }
       );

       const result = await response.text();
       console.log("Data fetched:", result);
       setData(result);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
  return (
    <div className="uploadMedia">
        <h1>¿Tienes sospecha de que el correo electrónico es phishing?</h1>
        <h3>Sube tus correos a analizar en el formato .mbox</h3>
        <img src={subir} alt="" />
        <input type="file" onChange={onFileChange} />
        <p>{data}</p> 
        <p> O arrastra archivos aquí</p>
    </div>
  );
}

export { UploadMedia };
