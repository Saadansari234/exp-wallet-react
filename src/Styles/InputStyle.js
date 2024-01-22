import { createUseStyles } from 'react-jss';

export const myStyle= createUseStyles({
    InputWidth:{
        // maxWidth: "18vw",
        margin: 0,
        maxWidth: 250,
        minWidth: 250,
    },
    OptionArea:{
     overFlow: 'hidden',
    },
    scrollbar:{
        minHeight:'25vh'
    }
})