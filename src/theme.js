import { createTheme } from "@mui/material"

export const color = {
    primary: {
        100: "#455946",     //69, 89, 70
        95: "#f6f7f6",      //246, 247, 246
        90: "#edefed",      // 237, 239, 237
        80: "#dadeda",      // 218, 222, 218
        60: "#b5bdb5",      //181, 189, 181
        10: "#576958",      //87, 105, 88
        dark: {
            60: "#1b231c",  //27, 35, 28
        }
    },
    secondary: {
        100: "#455946",     //69, 89, 70
    },
    tertiary: {
        100: "#e2e4d8",     //226, 228, 216
    },
    extra: {
        white: "#F7F7F7" // 247,247,247x
    },
    textcolor: {
        primary: "#182135", //24, 33, 53
        secondary: "#4e483c", //#4e483c
        tertiary: "#F0AA14",
        grey: "#A3A3A4"
    },
    success: "#57a863",     //87, 168, 99
    failure: "#ec530a"      //#ec530a
}

const theme = {
    palette: {
        primary: {
            main: color.primary[100],
        },
        secondary: {
            main: '#455946',
        },
        text: {
            primary: color.textcolor.primary,
            secondary: color.textcolor.secondary
        }
    },
    typography: {
        h1: {
            fontSize: '20px',
            fontWeight: 700,
            color: color.textcolor.primary    
        },
        h2: {
            fontSize: '16px',
            fontWeight: 700,
            color: color.textcolor.primary 
        },
        h3: {
            fontSize: '14px',
            fontWeight: 400,
            color: color.textcolor.primary
        },
        h4: {
            fontSize: '12px',
            lineHeight: '24px',
            fontWeight: 400,
            color: color.textcolor.primary
        }

    }
}
export const appTheme = createTheme(theme);