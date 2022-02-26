import {
  InputBase,
  makeStyles,
  Paper,
  Button,
  IconButton,
  alpha,
} from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever"; //Este es el icono de la basura
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"; //Este es el icono de los puntos

import React, { useState } from "react";
//Aquí es donde vamos a escribir nueva cosa que hacer o tambien se rehutilizara para escribir nueva tarjeta ej "urgente"
export const AddCardorListText = ({type}) => {
  const [title, setTitle] = useState("");

  const classes = useStyle();

  return (
    //Aqui en el InputBase con el onChange me deja escribir en el input y recoger el valor y cambiar el estado con setTitle a title
    //Un fragment <> porque no puede haber dos hijos a la misma altura
    <>
      <Paper className={classes.card}>
        <InputBase
          multiline
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={type=== "card" ? "Enter title for this card" : "Enter list title..."}
          inputProps={{ className: classes.input }}
        />
      </Paper>
      <div className={classes.confirm}>
        <div className={classes.options}>
          {" "}
          <Button className={classes.btnConfirm}>
            {
              type== "card" ? "Add card" : "Add list"
            }
            
            </Button>
          {/* Este es es icono de papelera, pero va rodeado por el IconButton para que pueda ser clickado */}
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        </div>

        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },

  input: {
    margin: theme.spacing(1),
  },
  confirm:{
    display:"flex",
    margin: theme.spacing(0,1,1,1)
  },
  options:{
    flexGrow: 1,
  },
  btnConfirm:{
      background:"#5aac44",
      color: "#fff",
      "&:hover":{
        background : alpha("#5aac44", 0.75)
      }
  }
}));
