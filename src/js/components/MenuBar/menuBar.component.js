import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Tabs, Toolbar, Tab, Typography, Container, Grid, Box} from "@mui/material";
import { styled } from '@mui/material/styles';

const TabCustom = styled(Tab)`
 text-transform: none;
 font-family:'Playfair';
 font-size:19px;
 font-weight:normal;
 color: black;
`;


export const MenuBarComponent = () => {

    const [value, setValue] = React.useState(0);
    const [title,setTitle] = React.useState('Obroty');

    const handleChange = (event, newValue) => {
        setTitle(event.target.textContent);
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Grid container sx={{flexDirection:'row'}}>
            <Box sx={{padding: 0, margin: 0, display: 'block', position: 'relative', width: '80px', height: '250px'}}>
            <Typography sx={
                        {
                        textAlign: 'right',
                        display:'block',    
                        fontSize: '16px', 
                        fontFamily: 'Playfair',
                        fontWeight: '500',
                        width: '250px',
                        position: 'absolute',
                        transformOrigin: '0 0',
                        transform: 'rotate(270deg) translateX(-250px)',
                        textTransform: 'uppercase',
                        '&::after': {
                            content: '""',
                            width: '50px',
                            height: '5px',
                            marginLeft: '2px',
                            backgroundColor: '#aa9588',
                            display: 'inline-block'
                        }
                        }}>{title}
            </Typography>
            </Box>

            <Box sx={{paddingTop: '40px'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="menu główne aplikacji" indicatorColor={"primary"} sx={
                        {marginRight: 'auto', boxShadow: 0}} textColor='primary'>
                        <TabCustom label="Obrót" value={0} to="/" component={Link} />
                        <TabCustom label="Kontrahenci" value={1} to="/clients" component={Link}/>
                        <TabCustom label="Kategorie towarów" value={2} to="/categories" component={Link} />
                        <TabCustom label="Stawki podatku" value={3} to="/tax-rates" component={Link} />
                        <TabCustom label="Operacje" value={4} to="/operations" component={Link} />
                        <TabCustom label="Użytkownicy" value={5} to="/users" component={Link} />
                    </Tabs>
            </Box>
            </Grid>
        </React.Fragment>
    )
}