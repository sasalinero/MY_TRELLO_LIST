//Componente para añadir una lista o una tarea nueva, va a ser el componente reutilizable
import {
  Collapse,
  alpha,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"; //Collapse, Con este componente podemos hacer un acordeon dandole a un boton expandir o no
import { useState } from "react";
import { AddCardorListText } from "./AddCardorListText";
// ponemos un {type} , una cadena de texto para uqe nos diga si vamso a ñadir un card o un list
const AddCardorList = ({ type }) => {
  const [open, setOpen] = useState(true);

  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AddCardorListText type={type}/> 
         {/* Aqui se pasa por props el type (la cadena de texto) */}
      </Collapse>

      <Collapse in={!open}>
        <Paper className={classes.addCardorListText}>
          <Typography>
            {type === "card" ? "+ Add a card" : "+ Add an other list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
  },

  addCardorListText: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#ebecf0",
    "&:hover": {
      backgroundColor: alpha("#66FF19", 0.5),
    },
  }, //Con el hover y el fade hacemos que cuando el raton pase por encima se oscurezca #000 pero solo un 25%
}));

export default AddCardorList;
