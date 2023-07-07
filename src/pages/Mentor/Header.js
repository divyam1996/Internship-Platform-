import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    const classes = makeStyles(theme => ({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    // const history = useHistory();
    const handleClick = (name) => {
        console.log('inside');
        // history.push(`/mentor/${name}`)
    }
    return (
        <AppBar position="static">
            <Toolbar color="grey" style={{ justifyContent: 'space-between' }}>
                <div style={{ justifyContent: 'flex-start' }}>
                    <IconButton edge="start" color="grey" aria-label="menu" className={classes.menuButton}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>INSTEP</Typography>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                    <Button color="inherit"><Link to="/mentor" style={{ color: "white", textDecoration: " none" }}>Dashboard</Link></Button>
                    <Button color="inherit"><Link to="/mentor/candidates" style={{ color: "white", textDecoration: " none" }}>Candidates</ Link> </Button>
                    <Button color="inherit">Projects</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}