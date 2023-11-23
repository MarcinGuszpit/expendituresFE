import React from "react";
import Box from "@mui/material/Box";
import { TextField, InputAdornment, RadioGroup, FormControlLabel, Radio, FormControl, Button, Grid, Checkbox } from "@mui/material";
import { PageTitle } from "../components/other/pageTitle.component";
import { useForm } from "react-hook-form";

export const TaxRatesPage = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <PageTitle>Stawki podatku</PageTitle>
            </Box>
            
            <form style={{  backgroundColor: 'white',borderLeft: '7px solid #aa9588', padding: '20px', margin: '20px'}}>
            <Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="strech">
                <Grid item xs={6}>
                    <TextField error={true} id="tax-rate-name" label="Nazwa stawki" variant="outlined" fullWidth  
                    margin="normal" helperText={"tekst błędu"} />
                </Grid>
                <Grid item>
                    <TextField id="tax-rate" label="Wartość stawki" variant="outlined" fullWidth margin="normal"  InputProps={{
                    startAdornment: <InputAdornment position="start">%</InputAdornment>,}}/>
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormControlLabel control={<Checkbox />} label="Stawka domyślna" />
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button variant="contained" size="large">Zapisz</Button>     
                </Grid>        
            </Grid> 
            </form>


        </React.Fragment>
    )
}
