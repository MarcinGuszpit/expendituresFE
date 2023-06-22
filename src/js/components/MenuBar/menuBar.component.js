import React, {useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import {AppBar, Tabs, Toolbar, Tab, Typography, Container, Grid} from "@mui/material";

export const MenuBarComponent = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // useEffect(()=>{

    // })

    return (
        <React.Fragment>
            <Grid container sx={{flexDirection:'row'}}>
            <Typography sx={
                        {
                        minHeight: '200px',    
                        display:'block',    
                        fontSize: '16px', 
                        fontFamily: 'Playfair',
                        padding: '50px 0 0 50px',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        transform:'rotate(270deg)'}}>Obrót
            </Typography>
            <Grid>
                    <Tabs value={value} onChange={handleChange} aria-label="menu główne aplikacji" indicatorColor={"primary"} sx={
                        {marginRight: 'auto', paddingLeft: '18px', fontFamily:'Playfair', textTransform: 'none', boxShadow: 0, fontWeight:'normal'}} textColor='primary'>
                        <Tab label="Obrót" value={0} to="/" component={Link} sx={{textTransform:'none', fontFamily:'Playfair', fontSize:'19px', fontWeight:'normal'}} />
                        <Tab label="Kontrahenci" value={1} to="/clients" component={Link}/>
                        <Tab label="Kategorie towarów" value={2} to="/categories" component={Link} />
                        <Tab label="Stawki podatku" value={3} to="/tax-rates" component={Link} />
                        <Tab label="Operacje" value={4} to="/operations" component={Link} />
                        <Tab label="Użytkownicy" value={5} to="/users" component={Link} />
                    </Tabs>
            </Grid>

            </Grid>


            {/* <AppBar position={"static"} color={"secondary"} sx={{boxShadow:'none', minHeight: 'auto'}}> 
                <Toolbar disableGutters>
                    <Typography sx={
                        {fontSize: '12px', 
                        padding: '20px', 
                        textTransform:'upercase', 
                        fontFamily: 'Playfair',
                        fontWeight: '500'}}>Aplikacja Expenditures</Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="menu główne aplikacji" indicatorColor={"primary"} sx={
                        {marginRight: 'auto', paddingLeft: '18px', fontFamily:'Playfair', textTransform: 'none', boxShadow: 0, fontWeight:'normal'}} textColor='primary'>
                        <Tab label="Obrót" value={0} to="/" component={Link} sx={{textTransform:'none', fontFamily:'Playfair', fontSize:'19px', fontWeight:'normal'}} />
                        <Tab label="Kontrahenci" value={1} to="/clients" component={Link}/>
                        <Tab label="Kategorie towarów" value={2} to="/categories" component={Link} />
                        <Tab label="Stawki podatku" value={3} to="/tax-rates" component={Link} />
                        <Tab label="Operacje" value={4} to="/operations" component={Link} />
                        <Tab label="Użytkownicy" value={5} to="/users" component={Link} />
                    </Tabs>
                </Toolbar>

            </AppBar> */}
        </React.Fragment>
    )
}