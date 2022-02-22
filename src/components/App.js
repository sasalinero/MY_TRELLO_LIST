import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../styles/App.scss";

function App() {
  const [urgente, setUrgente] = useState("");
  const [noUrgente, setNoUrgente] = useState("");
  const [hecho, setHecho] = useState("");

  const handleChange = (ev) => {
    // const valueUrgente = ev.target.value;
    // setUrgente(valueUrgente);
    // const valueNoUrgente = ev.target.value;
    // const valueHecho = ev.target.value;

    // console.log(valueUrgente, valueHecho);
    
    // setNoUrgente(valueNoUrgente);
    // setHecho(valueHecho);
  };

  const handleClick=(ev)=>{
    const valueUrgente = ev.target.value;
    setUrgente(valueUrgente);
   

  }
  return (
    <div className="app">
      <header className="app-header">
        <h1>TO DO LIST</h1>
      </header>
  
       
        <form action="">
        <label htmlFor="">URGENTE</label>
        <input
          type="text"
          name="urgente"
          onChange={handleClick}
          value={urgente}
        />
           <button onClick={handleClick}>Enter</button>
      
      <ul>
          <li>{urgente}</li>
        </ul>
                
        
        
   
       
        
        {/* <label htmlFor="">HECHO</label>
        <input type="text" name="hecho" onChange={handleChange} value={hecho} /> */}
       
        
       
      </form>
    

      <footer>Created by Samantha Salinero</footer>
    </div>
  );
}

export default App;
