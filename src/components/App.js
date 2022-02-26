import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../styles/App.scss";
import TrelloList from "./TrelloList";
import background_image from "../images/color.jpg"
import AddCardorList from "./AddCardorList";
import mockData from "./mockdata.js"

function App() {
  const classes=useStyle();
  const [data, setData]=useState(mockData);
  console.log(data)

  return (
    <div className={classes.root}>
     <div className={classes.container} >
  <TrelloList/>
      <TrelloList/>
      <TrelloList/>
 <div>    <AddCardorList type="list"/></div>
     </div>
    
 
    
  
    </div>
  );
}


const useStyle= makeStyles(theme=>({
  //se escribe un poco diferente a css porque usamos un objeto, tiene CamelCase y separado por coma","
 root:{
   minHeight:"100vh",
    overflowY:"auto", //para que nos aparezca un scroll siempre, no solo cuando se obrepase
   backgroundImage: `url(${background_image})`  ,
   backgroundPosition:"center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repetat"

 },
 container:{
  display:"flex",
  
 }
  

      
  
  }))
export default App;
