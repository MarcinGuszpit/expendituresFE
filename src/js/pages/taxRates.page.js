import React from "react";
import Box from "@mui/material/Box";
import { TextField, InputAdornment, RadioGroup, FormControlLabel, Radio, FormControl } from "@mui/material";
import { PageTitle } from "../components/other/pageTitle.component";

export const TaxRatesPage = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <PageTitle>Stawki podatku</PageTitle>
            </Box>
            <Box>
                <form style={{  backgroundColor: 'white',borderLeft: '7px solid #aa9588', padding: '20px', margin: '20px'}}>
                    <TextField id="tax-rate-name" label="Nazwa stawki" variant="outlined" fullWidth  margin="normal"/>
                    <TextField id="tax-rate" label="Wartość stawki" variant="outlined" fullWidth margin="normal"  InputProps={{
                        startAdornment: <InputAdornment position="start">%</InputAdornment>,}}/>
                    <FormControl>
                        <RadioGroup row  aria-labelledby="group-select" name="default">
                        <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="domyślna stawka"
                            labelPlacement="start"/>
                        </RadioGroup>   
                    </FormControl>
                </form>
            </Box> 

        </React.Fragment>
    )
}
