import React from "react";
import { PageTitle } from "../components/other/pageTitle.component";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextField, InputAdornment, RadioGroup, FormControlLabel, Radio, FormControl, Button, Grid, Checkbox } from "@mui/material";


export const CategoriesPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log('submit action');
    }

    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <PageTitle>Kategorie towarów</PageTitle>
            </Box> 
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="strech">
                <Grid item>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label>Field 1</label>
                    <input defaultValue="test" {...register("example")} />
                    {/* {errors.example && errors.example.message && <label>{errors.example.message}</label>} */}
                </Grid>
                <Grid item>
                    {/* include validation with required or other standard HTML validation rules */}
                    <label>Field 2</label>
                    <input {...register("exampleRequired", { required: {value: true, message: 'Wartość musi być podana'}})} />
                    
                </Grid>
                <Grid item>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <label>{errors.exampleRequired.message}</label>}
                    {/* {errors.exampleRequired && <span>This field is required</span>}                     */}
                </Grid>
                <Grid item>
                    <input type='submit' value='Zapisz' />
                    {/* <Button variant="contained" size="large">Zapisz</Button>      */}
                </Grid>        
            </Grid> 
            </form>  
        </React.Fragment>
    )
}