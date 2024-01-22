import { Box } from '@mui/material'
import React from 'react'
import ExpenseContainer from './ExpenseForm'
import IncomeForm from './IncomeForm'
import { createUseStyles } from 'react-jss'

const myStyle= createUseStyles({
  box:{
    display:"flex",
    flexDirection:"column",
    gap:"3vh"
  }
})

const Forms = () => {
  const classes= myStyle()
  return (
   <Box className={classes.box} >
     <ExpenseContainer />
     <IncomeForm />
   </Box>
  )
}

export default Forms
 