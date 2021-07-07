 
  import { useState } from "react";
import AlbumPhotos from "./AlbumPhotos";
import Form from "./Form";
import Header from "./Header";

const Main = () => {
     const [data, setData] = useState([]);
    
   const fetchData = async(id) =>{
     await fetch("https://jsonplaceholder.typicode.com/albums/" + id + "/photos")
     .then((resp) => {return resp.json()})
     .then((data) => { 
         setData(data)
          console.log(data);
    })
     .catch((error) => {console.log(error)})
   }


 
   return (
   <>
   <Header />
    <Form onSubmitForm={fetchData}/> 
    <AlbumPhotos data = {data}  />
   </>
    )


}

export default Main; 