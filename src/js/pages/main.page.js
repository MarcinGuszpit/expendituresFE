import React from "react";
import {Outlet} from "react-router-dom";

export const MainPage = () => {
    return <React.Fragment>
        <Outlet/>
    </React.Fragment>
}