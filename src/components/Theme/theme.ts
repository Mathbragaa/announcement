
import {createTheme } from "@mui/material/styles";


const themeDefault = createTheme ({
    palette:{
        primary:{
            main: '#000000',
        },
        secondary:{
            main: '#ffffff',
        },

        background: {
            paper: 'rgb(242, 244, 245)',
            default: '#ffffff'            
        },

    }
});

export default themeDefault