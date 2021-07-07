
const AlbumPhotos = (props) =>{
    
   return (props.data.length<=0)?  
   ( <div className="startingMessage">
         <div><h1>To Get Started</h1>
  <p>Enter a valid Id between 1 and 100 to see the album photos.</p></div>
     </div>) :  
      (
        <div className="Album">   
          <h2>Photos</h2>
            <div className="photos">
            {props.data.map((element, index) =>(
             <div className="photo" key={index}>
                <p>{element.title}</p>
                <img src={element.thumbnailUrl} alt=""/>
              </div>
           
            ))}
        </div>
        </div>
    )

 };

export default AlbumPhotos