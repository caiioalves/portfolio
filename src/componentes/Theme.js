import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#f0e7db',
        },
        secondary: {
            main: '#202023',
        },

        buttonsLight: {
            main: '#BF3604',
            contrastText: '#FFFFFF'
        },

        buttonsDark: {
            main: '#04B2D9',
        },
        text: {
            primary: '#011F26',
            secondary: '#fff'
        } 
    }
})