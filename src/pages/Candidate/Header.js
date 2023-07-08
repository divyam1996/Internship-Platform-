import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions';

export const Header = () => {
    const navigate = useNavigate();
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
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(logout());
        navigate("/");
    }
    return (
        <AppBar style={{ background: '#8626C3' }} position="static">
            <Toolbar color="grey" style={{ justifyContent: 'space-between' }}>
                <div style={{ justifyContent: 'flex-start' }}>
                    <IconButton edge="start" color="grey" aria-label="menu" className={classes.menuButton}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="div" className={classes.title} style={{ textAlign: "center", fontFamily: "Arial", fontWeight: "700" }}>INSTEP</Typography>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                    <Button color="inherit"><Link to="/candidate" style={{ color: "white", textDecoration: " none" }}>Dashboard</Link></Button>
                    <Button color="inherit"><Link to="/candidate/applications" style={{ color: "white", textDecoration: " none" }}>Applications</Link></Button>
                    <Button color="inherit" onClick={handleSignOut}>SignOut</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}