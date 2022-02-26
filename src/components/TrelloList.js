import {Paper, CssBaseline, makeStyles} from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardorList";


const TrelloList = () => {
    //esta const es para habilitar el hook que está en la linea 7 de clases
    const classes=useStyle();


  return (
      <Paper className={classes.root}>
          <CssBaseline/>
    <ListTitle/>
    <TrelloCard/>
    <TrelloCard/>
    <TrelloCard/>
    <AddCardorList type="card"/>

     </Paper>
  )
}

//Pongo aqui tdos los estilos para que no se vea feo pero, hay que importarlo y llevarlo a un archivo

//nos va a dar un callback function y de ella extraemos un thema que nos va a permitir mostrar un objeto que es donde vamos a escribir las clases y las reglas
const useStyle= makeStyles(theme=>({
    //se escribe un poco diferente a css porque usamos un objeto, tiene CamelCase y separado por coma","
        root:{
            width: "300px",
            background: "#ebecf0",//usamos este objeto theme para poder usar margenes y padding consistentes
            margin:theme.spacing(1) //nos da margenes por todos sitios de 1 unidad
        }
    
    }))



export default TrelloList