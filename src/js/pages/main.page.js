import React from "react";
import {Outlet} from "react-router-dom";
import {MenuBarComponent} from "../components/MenuBar/menuBar.component";
import { Container, Grid } from "@mui/material";
import { FooterComponent } from "../components/Footer/footer.component";

export const MainPage = () => {
    return <React.Fragment>

            <Grid container sx={{justifyContent: 'center'}}>
                <div className="app-title">To jest jakiś tekst</div>
            </Grid>
            <Container sx={{boxShadow: 20, backgroundColor: '#e4e4e4'}} maxWidth="xl" disableGutters>
                <MenuBarComponent/>
                <Outlet/>
                <FooterComponent/>
            </Container>

    </React.Fragment>
}