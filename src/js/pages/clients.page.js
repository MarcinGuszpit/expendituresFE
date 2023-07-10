import React from "react";
import { PageTitle } from "../components/other/pageTitle.component";
import { Box } from "@mui/material";


export const ClientsPage = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <PageTitle>Kontrahenci</PageTitle>
            </Box>
        </React.Fragment>
    )
}