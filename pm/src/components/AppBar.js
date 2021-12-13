import * as React from "react";
import { AppBar, CreateButton, UserMenu, Logout } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AppTitle } from "../constants/Config"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { getUserName } from "../authProvider";

const useStyles = makeStyles({
    title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'normal'
    },
    appTitle: {
        flex: 1,
        fontWeight: 'bold',
        marginRight: '1em'
    },
    spacer: {
        flex: 1,
    },
});

const AppLogout = () => {
    return (
        <Logout onClick={() => window.msal.logout()} icon={<ExitToAppIcon/>} />
    )
}

const UserProfileMenu = props => (
    <UserMenu {...props} logout={<AppLogout/>}>
      <Typography variant="h6" style={{padding: '0.5em 1em 0.5em 1em', marginTop: '-0.5em', backgroundColor: '#e2f1f8', fontSize: '0.9em', fontWeight: 'bold'}}>{getUserName()}</Typography>
      
    </UserMenu>
);

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props} color="secondary" userMenu={<UserProfileMenu/>}>
            <Typography variant="h6" color="inherit" className={classes.appTitle}>{AppTitle} | <span id="react-admin-title" className={classes.title}/></Typography>
            <span className={classes.spacer} />
            <CreateButton 
                basePath="/locations"
                variant="outlined"
                color="inherit"
                size="medium"
                label="New Location"
                style={{fontWeight: 'bold'}}
            />
            
        </AppBar>
    );
};

export default MyAppBar;