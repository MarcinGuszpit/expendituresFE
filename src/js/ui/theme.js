import {createTheme} from "@mui/material";

export const app_theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#775941',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#4f9472',
        },
        // Provide every color token (light, main, dark, and contrastText) when using
        // custom colors for props in Material UI's components.
        // Then you will be able to use it like this: `<Button color="custom">`
        // (For TypeScript, you need to add module augmentation for the `custom` value)
        custom: {
            main: '#5e82a0',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});


const theme_palette_2 = {
    palette: {
        mode: 'light',
        common: {
            color_1: '#775941',
            color_2: '#c0d963',
        },
        primary: {
            main: '#775941',
        },
        secondary: {
            main: '#c0d963',
        },
        error: {
            main: '#84494b',
        },
        info: {
            main: '#84a85a',
        },
    },
};

export const app_style_2 = createTheme(theme_palette_2);
