import React from 'react'
import SelectCatagory from '../../common/SelectCatagory'
import { CategoriesList } from '../../Database/CategoriesList'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AmountInput from '../../common/AmountInput';
import { Cardstyle } from '../../Styles/Cardstyle';
import ButtonStyle from '../../Styles/ButtonStyle';
import { Button } from '@mui/material';

const ExpenseContainer = () => {
const classes= Cardstyle()
const buttonstyle= ButtonStyle()
    return (
        <Card className={classes.card}>
            <CardContent className={classes.container}>
                <Typography variant='h6' className={classes.typography}>ADD Expenses</Typography>
                <SelectCatagory myData={CategoriesList} Label={"categories"} />
                <AmountInput />
                <Button variant="outlined"  className={buttonstyle.buttonrRed}>ADD</Button>
            </CardContent>
        </Card>
    )
}

export default ExpenseContainer



