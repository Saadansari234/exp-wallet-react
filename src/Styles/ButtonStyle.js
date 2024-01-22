import { createUseStyles } from "react-jss";

const ButtonStyle= createUseStyles({
    buttonrRed:{
        maxWidth: 100,
        border:"1px solid red", 
        color:"red"
    },
    buttonBlue:{
        maxWidth: 100
    },
    tablebutton:{ 
        minWidth:"0",
        color:"red",
        padding:"0.8vh 0.6vw"
    }
})

export default ButtonStyle