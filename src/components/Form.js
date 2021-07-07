import { useState } from "react";

const Form = props => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(''); 

    const handleChange = (event) =>{
            setInputValue( event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let filteredValue = inputValue.replace(/[^0-9]+/g, "");
        console.log(filteredValue);
         if(filteredValue >=1 && filteredValue<=100){
            setInputValue(filteredValue);
            props.onSubmitForm(filteredValue);
            setError('');
         }else{
            setError("Enter an id between 1 and 100"); 
         }
       
    }

    return(
        <form onSubmit={handleSubmit}>
            {(error)? <p className="error">{error}</p>: null}
              <input type="text" value ={inputValue} onChange={handleChange} placeholder="Enter the album id" />
             <input type="submit" value="Get Album"/>
        </form>
    )

}

export default Form; 