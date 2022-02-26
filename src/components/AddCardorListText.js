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
export const AddCardorListText = ({type, setOpen}) => {
  const [title, setTitle] = useState("");

  const classes = useStyle();

  return (
    //Aqui en el InputBase con el onChange me deja escribir en el input y recoger el valor
    // y cambiar el estado con setTitle a title
    //Un fragment <> porque no puede haber dos hijos a la misma altura
    <>
      <Paper className={classes.card}>
        <InputBase
          multiline
          value={title}
          onBlur={()=>setOpen(false)} 
          // Con esta funcion pasada por props hace: si estamos escribiendo en el input y clickamos fuera, se cierra,
          // lo he puesto arriba en props junto con type para poder usarla. Y ha venido de la linea 20 AddCardorList, 
          // que es quien maneja si abre o cierra. Se convierte en falso.
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
            {/* Type depende si quiere hacer una lista o una tarjeta, pondrá en el boton add card o add list */}
            </Button>
          {/* Este es es icono de papelera, pero va rodeado por el IconButton para que pueda ser clickado */}
          <IconButton onClick={()=>setOpen(false)}>
            {/* Este onClick lo que hace es que si damos a la basura se cierra, e sparecido a la funcion de onBlur de arriba */}
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
