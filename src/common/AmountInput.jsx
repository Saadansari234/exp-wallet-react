import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import { myStyle } from '../Styles/InputStyle';



const AmountInput = ({onchange,}) => {
  const classes= myStyle()
  return (
    <FormControl fullWidth  className={classes.InputWidth} variant="filled">
    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
    <FilledInput 
      onChange={onchange}
      id="filled-adornment-amount"
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
    />
  </FormControl>
  )
}

export default AmountInput 
