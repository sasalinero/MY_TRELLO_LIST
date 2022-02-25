//Componente para añadir una lista o una tarea nueva
import{Collapse, alpha, makeStyles, Paper, Typography} from "@material-ui/core"//Collapse, Con este componente podemos hacer un acordeon dandole a un boton expandir o no
import { useState } from "react"
import { AddCardorListText } from "./AddCardorListText";

const AddCardorList = () => {

const [open, setOpen ]=useState(true);

const classes=useStyle();



  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AddCardorListText/>

        </Collapse> 
      
       <Collapse in={!open}>

       <Paper className={classes.addCardorListText}>
         <Typography>+ Add a card</Typography>
          </Paper>

       </Collapse>
       
      
      </div>
     

   
  )
}


const useStyle= makeStyles(theme=>({
 
  root:{
  
     width:"300px",
     marginTop: theme.spacing(1),
  },

  addCardorListText: {

    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#ebecf0",
    "&:hover" :{
      backgroundColor: alpha("#66FF19", 0.50)
    }

  }//Con el hover y el fade hacemos que cuando el raton pase por encima se oscurezca #000 pero solo un 25%

}))

export default AddCardorList