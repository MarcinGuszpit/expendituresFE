import React from "react";
import { PageTitle } from "../components/other/pageTitle.component";
import { Box } from "@mui/material";



export const CategoriesPage = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: '20px' }}>
                <PageTitle>Kategorie towarów</PageTitle>
            </Box>   
        </React.Fragment>
    )
}