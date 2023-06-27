import React from "react";
import { Box, Typography } from "@mui/material";


export const TaxRatesPage = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h4" component={"div"} color="primary">
                    Stawki podatku
                </Typography>
            </Box>
        </React.Fragment>
    )
}
