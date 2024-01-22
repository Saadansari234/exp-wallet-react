import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Forms from '../component/formContainer/Forms';
import Tables from '../component/TableContainer/Tables';

export default function Main() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                  <Tables />
                  <Forms />
            </Container>
        </React.Fragment>
    );
}