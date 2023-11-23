import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {MenuBarComponent} from "../components/MenuBar/menuBar.component";
import { Container, Grid } from "@mui/material";
import { FooterComponent } from "../components/Footer/footer.component";
import {useCounter} from '../hooks/use-counter';

export const MainPage = () => {
    const counter = useCounter();

    useEffect(()=>{
        console.log('starts');
    },[]);

    return <React.Fragment>

            <Grid container sx={{justifyContent: 'center'}}>
                <div className="app-title">To jest jakiś tekst</div>
            </Grid>
            <Container sx={{boxShadow: 20, backgroundColor: '#e4e4e4'}} maxWidth="xl" disableGutters>
                {/* <div>{counter}</div> */}
                <MenuBarComponent/>
                <Outlet/>
                <FooterComponent/>
            </Container>

    </React.Fragment>
}