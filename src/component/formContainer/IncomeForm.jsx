import React from 'react'
import SelectCatagory from '../../common/SelectCatagory'
import { AccountsList } from '../../Database/CategoriesList'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AmountInput from '../../common/AmountInput';
import { Cardstyle } from '../../Styles/Cardstyle';
import { Button } from '@mui/material';
import ButtonStyle from '../../Styles/ButtonStyle';

const IncomeForm = () => {
    const classes= Cardstyle()
    const buttonstyle= ButtonStyle()
    return (
       
        <Card className={classes.card}>
            <CardContent className={classes.container}>
                <Typography variant='h6' className={classes.typography}>ADD Income</Typography>
                <SelectCatagory myData={AccountsList} Label={"categories"} />
                <AmountInput />
                <Button variant="outlined" className={buttonstyle.buttonBlue}>ADD</Button>
            </CardContent>
        </Card>

    )
}

export default IncomeForm
