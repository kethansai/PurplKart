import React from 'react'
import {Container, AppBar,Typography,Grid,Grow} from '@material-ui/core'
import Logo from "./Images/logo.png"


function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>PurplThings</Typography>
                <img src={Logo} alt='PurplThings Logo' height="60"/>
            </AppBar>
        </Container>
    )
}

export default App;