import React from "react";
import {Outlet} from "react-router-dom";
import {MenuBarComponent} from "../components/MenuBar/menuBar.component";

export const MainPage = () => {
    return <React.Fragment>
        <MenuBarComponent></MenuBarComponent>
        <Outlet/>
    </React.Fragment>
}