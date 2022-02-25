
import {  makeStyles, Typography} from '@material-ui/core'//nos da varias tipografias para los h1, botones etc, para usarlo hay que instalar la fuente roboto con npm install @fontsource/roboto
//import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

//ListTitle es un componente para añadir un titulo a la lista, ya sea To do, Doing, Hecho
const ListTitle = () => {

  const classes=useStyle("")

  return (

    <div className={classes.title}>

 <Typography className={classes.titleText}/>To Do<Typography/>
 <MoreHorizIcon/>

    </div>


   
  )
}
//nos va a dar un callback function y de ella extraemos un thema que nos va a permitir mostrar un objeto que es donde vamos a escribir las clases y las reglas
const useStyle= makeStyles(theme=>({
    //se escribe un poco diferente a css porque usamos un objeto, tiene CamelCase y separado por coma","
        title:{
          display:"flex",//Para que los puntos aparezcan a la derecha del To do
          margin: theme.spacing(1) 
           
        }, 

      
        titleText:{
          flexGrow:1, //Para que ocupe todo el tamaño de la caja¿Por qué no se separan los puntos del toDo?
        }
    
    }))

export default ListTitle