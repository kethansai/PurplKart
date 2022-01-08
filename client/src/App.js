import React from 'react'
import {Container, AppBar,Typography,Grid,Grow} from '@material-ui/core'
import Logo from "./Images/logo.png"
import Items from "./components/Items/Items"
import Form from './components/Form/Form'

function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>PurplThings</Typography>
                <img src={Logo} alt='PurplThings Logo' height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Items/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;