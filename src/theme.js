import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#61dafb',
            light: '#61dafb',
            dark: '#61dafb',
        },
        secondary: {
            main: '#b5ecfb',
            light: '#61dafb',
            dark: '#61dafb',
        },
        error: {
            main: '#21a1c4',
        },
        background: {
            default: '#282c34',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: '20px 10px',
                margin: '10px',
                backgroundColor: '#fff', // 5d737e
            },
        },
        MuiButton: {
            root: {
                margin: '5px',
            },
        },
    },
});
export default theme;