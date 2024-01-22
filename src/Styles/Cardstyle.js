import { createUseStyles } from "react-jss";

export const Cardstyle= createUseStyles({
    card:{
     minWidth: 100,
     maxWidth: 300,
     border:"2px dashed gray"
    },
    container:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
     gap:"3vh"
    },
    typography:{
        color:"GrayText"
    },
    
})