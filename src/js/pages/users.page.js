import React from "react";
import Box from "@mui/material/Box";
import { PageTitle } from "../components/other/pageTitle.component";
import { TextField, InputAdornment, RadioGroup, FormControlLabel, Radio, FormControl, Button, Grid, Checkbox } from "@mui/material";


export const UsersPage = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <PageTitle>Użytkownicy</PageTitle>
                <form style={{  backgroundColor: 'white',borderLeft: '7px solid #aa9588', padding: '20px', margin: '20px'}}>
                <Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="strech">
                    <Grid item>
                        <TextField  id="user-name" label="Nazwa użytkownika" variant="outlined" fullWidth  
                        margin="normal" helperText={"tekst błędu"} />
                    </Grid>
                    <Grid item>
                        <TextField  id="user-name" label="E-mail użytkownika" variant="outlined" fullWidth  
                        margin="normal" helperText={"tekst błędu"} />
                    </Grid>
                    <Grid item>
                        <TextField  id="user-password" label="Hasło" variant="outlined" fullWidth  
                        margin="normal" helperText={"tekst błędu"} />
                    </Grid>

                </Grid>
                </form>
            </Box>
        </React.Fragment>
    )
}