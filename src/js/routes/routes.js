import {ErrorPage} from "../pages/error.page";
import {MainPage} from "../pages/main.page";
import {TurnOverPage} from "../pages/turnOver.page";
import {CategoriesPage} from "../pages/categories.page";
import {ClientsPage} from "../pages/clients.page";
import {createBrowserRouter} from "react-router-dom";
import {OperationsPage} from "../pages/operations.page";
import {TaxRatesPage} from "../pages/taxRates.page";
import {UsersPage} from "../pages/users.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <TurnOverPage/>,
            },
            {
                path: "/categories",
                element: <CategoriesPage/>,
            },
            {
                path: "/clients",
                element: <ClientsPage/>,
            },
            {
                path: "/operations",
                element: <OperationsPage/>,
            },
            {
                path: "/tax-rates",
                element: <TaxRatesPage/>,
            },
            {
                path: "/users",
                element: <UsersPage/>,
            }

        ]
    },
]);