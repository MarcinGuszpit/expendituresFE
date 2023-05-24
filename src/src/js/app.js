import {createRoot} from 'react-dom/client';
import React from "react";

const appNode = document.getElementById("App");
const app = createRoot(appNode);
app.render(
    <React.Fragment>
        <div>hello działa!</div>
    </React.Fragment>);