import React, {useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import {AppBar, Tabs, Toolbar, Tab, Typography} from "@mui/material";

export const MenuBarComponent = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // useEffect(()=>{

    // })

    return (
        <React.Fragment>
            <AppBar position={"static"} color={"secondary"}> 
                <Toolbar disableGutters>
                    <Typography sx={
                        {fontSize: '24px', 
                        padding: '20px', 
                        textTransform:'upercase', 
                        fontFamily: 'Playfair',
                        fontWeight: '500'}}>Aplikacja Expenditures</Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="menu główne aplikacji" indicatorColor={"primary"} sx={
                        {marginLeft: 'auto', paddingRight: '20px'}}>
                        <Tab label="Obrót" value={0} to="/" component={Link} />
                        <Tab label="Kontrahenci" value={1} to="/clients" component={Link}/>
                        <Tab label="Kategorie towarów" value={2} to="/categories" component={Link} />
                        <Tab label="Stawki podatku" value={3} to="/tax-rates" component={Link} />
                        <Tab label="Operacje" value={4} to="/operations" component={Link} />
                        <Tab label="Użytkownicy" value={5} to="/users" component={Link} />
                    </Tabs>
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}