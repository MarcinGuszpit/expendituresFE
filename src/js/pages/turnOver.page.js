import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";

export const TurnOverPage = () => {

    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h4" component={"div"}>
                    Obrót
                </Typography>

                <Typography variant="h1" component={"h2"} gutterBottom>To jest tutuł drugi</Typography>

                <Typography>To jest jakis tekst</Typography>

                <div>Turnover</div>
                <Button variant="contained" color="primary">To jest jakiś button</Button>
                <Typography variant="body1" color="primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam dolorem ea error hic id iure laboriosam sapiente sed. 
                    Consequuntur dolor in maiores maxime natus nesciunt quam veniam vitae.</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam dolorem ea error hic id iure laboriosam sapiente sed. Consequuntur dolor in maiores maxime natus nesciunt quam veniam vitae.</Typography>

                <Typography variant="p" gutterBottom align="justify" paragraph={true}>Terst typo Loremipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam dolorem ea error hic id iure laboriosam sapiente sed. Consequuntur dolor in maiores maxime natus nesciunt quam veniam vitae.</Typography>

                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam dolorem ea error hic id iure laboriosam sapiente sed. Consequuntur dolor in maiores maxime natus nesciunt quam veniam vitae.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam dolorem ea error hic id iure laboriosam sapiente sed. Consequuntur dolor in maiores maxime natus nesciunt quam veniam vitae.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aperiam dolorem ea error hic id iure laboriosam sapiente sed. Consequuntur dolor in maiores maxime natus nesciunt quam veniam vitae.</div>
            </Box>

        </React.Fragment>
    )
}