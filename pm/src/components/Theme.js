import { createTheme } from '@material-ui/core/styles';
import { defaultTheme } from "react-admin";
import deepOrange from '@material-ui/core/colors/deepOrange'
import grey from '@material-ui/core/colors/grey'

// const SECONDARY_COLOR = process.env.REACT_APP_SECONDARY_COLOR;
// const SECONDARY_LIGHT_COLOR = process.env.REACT_APP_SECONDARY_LIGHT_COLOR
// const PRIMARY_COLOR = process.env.REACT_APP_PRIMARY_COLOR;
const PRIMARY_COLOR = '#3f51b5';
const SECONDARY_COLOR = '#2196f3';
const SECONDARY_LIGHT_COLOR = '#e8f4fd';

const AppTheme = createTheme({
    ...defaultTheme, 
    typography: {
        h6: {
            fontFamily: 'Montserrat, sans-serif'
        },
        h5: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold'
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold'
        }
    },
    palette: {
        primary: {
            light: PRIMARY_COLOR,
            main: PRIMARY_COLOR,
            dark: PRIMARY_COLOR,
        },
        secondary: {
            light: SECONDARY_LIGHT_COLOR,
            main: SECONDARY_COLOR,
        }
    },
    overrides: {
        RaFilterButton: {
            root: {
                marginRight: '1rem',
            },
        },
        MuiButton: {
            root: { 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                textTransform: 'none'
            },
            containedSecondary: {
            },
            containedPrimary: {
            },
            outlinedSecondary: {
                color: 'black'
            },
            
        },
        MuiMenuItem: {
            root: { 
                fontFamily: 'Montserrat, sans-serif'
            }
        },
        RaMenuItemLink: {
            active: { 
                backgroundColor: '#e0e0e0',
                fontWeight: 'bold',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);'
            },
        },
        MuiCardHeader: {
            title: {
                fontWeight: 'bold'
            },
            action: {
                marginTop: 0,
                marginRight: 0
            }
        },
        MuiFilledInput: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.02)'
            }
        },
        MuiAppBar: {
            colorSecondary: {
                
            }
        },
        MuiChip: {
            colorPrimary: {
                backgroundColor: deepOrange[700]
            }
        },
        MuiToolbar: {
            regular: {
                backgroundColor: grey[100],
                minHeight: '48px !important'
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: 14
            }
        },
        MuiSvgIcon: {
        }
    }
})

export default AppTheme;