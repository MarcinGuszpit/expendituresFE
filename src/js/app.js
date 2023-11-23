import {createRoot} from 'react-dom/client';
import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";
import {ThemeProvider} from "@mui/material";
import {app_style_2, app_theme} from "./ui/theme";

const appNode = document.getElementById("App");
const app = createRoot(appNode);

app.render(
    <React.Fragment>
        <ThemeProvider theme={app_theme}>
            < RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </React.Fragment>);