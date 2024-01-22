import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { myStyle } from '../Styles/InputStyle';
import Scrollbars from 'react-custom-scrollbars-2'

const SelectCatagory = ({ Label, value, onchange, myData }) => {
    const classes = myStyle()

    return (
        <FormControl variant="filled" className={classes.InputWidth} >
            <InputLabel id="demo-simple-select-filled-label">{Label}</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={value}
                onChange={onchange}
                className={classes.OptionArea}
            >
                <Scrollbars 
                 className={classes.scrollbar}
                >

                    <MenuItem value="">
                        <em>-- Select --</em>
                    </MenuItem>
                    {
                        myData.map((elem, id) => {
                            return (
                                <MenuItem value={id}>{elem}</MenuItem>
                            )
                        })
                    }
                </Scrollbars>
            </Select>
        </FormControl>
    )
}

export default SelectCatagory
