
//Componente para Las tareas que hay que hacer. 

import {Paper,  makeStyles } from "@material-ui/core"

const TrelloCard = () => {
  const classes=useStyle();

  return (
    <Paper className={classes.trelloCard}>Card</Paper>
  )
}



const useStyle= makeStyles(theme=>({
 
      trelloCard:{
         padding:theme.spacing(1,1,1,2),
         margin:theme.spacing(1)
         
      }
  
  }))


export default TrelloCard