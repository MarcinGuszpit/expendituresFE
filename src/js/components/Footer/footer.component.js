import { Container, Box, Typography, Grid } from "@mui/material";
import {Link} from 'react-router-dom';
import React from "react";
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)`
   font-size: 20px;
   color: black;
   text-decoration: none;
   border-bottom: 2px solid transparent;
   :hover {
    border-bottom: 2px solid #be9e82;
   }
`;

export const FooterComponent = () => {
    return <React.Fragment>
        <Grid container sx={{backgroundColor:'white', padding:"50px 0 10px"}}>
                <Grid container sx={{flexDirection: 'row', justifyContent: 'center', columnGap: '20px'}}>
                    <StyledLink to="/">Obrót</StyledLink>
                    <StyledLink to="/clients">Kontrahenci</StyledLink>
                    <StyledLink to="/categories">Kategorie towarów</StyledLink>
                    <StyledLink to="/tax-rates">Stawki podatku</StyledLink>
                    <StyledLink to="/operations">Operacje</StyledLink>
                    <StyledLink to="/users">Użytkownicy</StyledLink>
                </Grid>
                <Grid item xs={12} sx={{paddingTop:'20px',textAlign: 'center'}}>&copy; 2023</Grid>
        </Grid>
    </React.Fragment>
}