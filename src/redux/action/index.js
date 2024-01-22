import Action from "./Action";

export const signin= () =>{
    return{
        type:Action.SIGNIN,      
    }
}

export const signout= () =>{
    return{
        type:Action.SIGNOUT,      
    }
}
