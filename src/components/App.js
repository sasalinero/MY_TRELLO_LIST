import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../styles/App.scss";
import TrelloList from "./TrelloList";

function App() {
 


  return (
    <div className="app">
      <TrelloList/>
  
    </div>
  );
}

export default App;
