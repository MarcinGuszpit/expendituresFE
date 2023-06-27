import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";

export const TurnOverPage = () => {

    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h4" component={"div"} color="primary">
                    Obrót
                </Typography>
            </Box>
        </React.Fragment>
    )
}