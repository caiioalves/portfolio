import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#f0e7db',
        },
        secondary: {
            main: '#202023',
        },
        buttons: {
            main: '#BF3604',
            contrastText: '#f0e7db'
        },
        text: {
            primary: '#011F26',
            secondary: '#fff'
        } 
    }
})