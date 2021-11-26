import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export const SearchUsers = ({setSearch}) => {
    const [inputValue, setInputValue] = useState("")
     const handleInputChange = (e) =>{
         setInputValue(e.target.value);
     }
     const handelSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
        setSearch(inputValue)
        setInputValue('');
    }
     }
    return (
        <div  className = "flex-container">
        
        <form onSubmit = {handelSubmit}>
        <div  className= "form-group">
        <label className="form-label"  > Usuario Buscado:</label>
        <input
        className="form-control" 
         type="text" 
         value = {inputValue}
         onChange={handleInputChange}/>
      
         </div>
        </form>
        
        <button className ="btn btn-primary"  type="button" onClick ={handelSubmit}> Buscar</button>
        </div>
        
    )
}