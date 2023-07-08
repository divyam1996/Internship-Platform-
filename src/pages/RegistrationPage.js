import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputLabel, Select } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegistrationPage() {
    const classes = useStyles();
    const [record, setRecord] = useState({
        "email": '',
        "password": '',
        "skills": [],
        "university_name": '',
        "full_name": ''

    })
    const navigate = useNavigate();
    const top100Films = [
        { title: 'Angular', year: 1994 },
        { title: 'React', year: 1972 },
        { title: 'Cloud', year: 1974 },
        { title: 'PostgreSQL', year: 2008 },
        { title: 'SQL', year: 1957 },
        { title: "DevOps", year: 1993 },
        { title: 'Cloud', year: 1994 },
        { title: 'AWS', year: 2003 },
        { title: 'Azure', year: 1966 },
        { title: 'GCP', year: 1999 },
        { title: 'Terraform', year: 2001 },
        { title: 'Mobile App Development', year: 1980 },
        { title: 'GoLang', year: 1994 },
        { title: 'NodeJs', year: 2010 },
        { title: 'Python', year: 2002 },
        { title: "Data Science", year: 1975 },
        { title: 'Data Analytics', year: 1990 },
        { title: 'Power BI', year: 1999 },
        { title: 'PyTorch', year: 1954 },
        { title: 'AI', year: 1977 },
        { title: 'Apache Spark', year: 2002 },
        { title: 'Scala', year: 1995 },
        { title: 'DataBricks', year: 1991 },
        { title: "Azure Data Factory", year: 1946 },
        { title: 'MEAN Stack', year: 1997 },
        { title: 'MERN Stack', year: 1995 },
        { title: 'Cloud Technologies', year: 1994 },
        { title: 'NextJS', year: 2001 },
        { title: 'NestJS', year: 1998 },
        { title: 'Express', year: 1968 },
        { title: 'NoSQL', year: 1998 },
        { title: 'Cassandra', year: 2014 },
        { title: 'GraphDB', year: 1942 },
        { title: 'Neo4J', year: 1931 },
        { title: 'Redshift', year: 1960 },
        { title: 'MongoDB', year: 1999 },
        { title: 'SAP', year: 2011 },
        { title: 'UI/UX', year: 1936 },
        { title: 'Adobe XD', year: 1981 },
        { title: 'Video Editing', year: 1954 },
        { title: 'Adobe Premier', year: 2002 },
        { title: 'Adobe Photoshop', year: 2006 },
        { title: 'Microsoft Office Suite', year: 1991 }
    ];
    const userRegister = useSelector(state => state.userRegister)
    const dispatch = useDispatch()
    const handleChange = ((e) => setRecord((prev) => (
        {
            ...prev,
            [e.target.name]: e.target.value
        }
    )));
    const handleSubmit = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/user/auth/registerCandidate`, record).then((res) => {
            dispatch(register(res.data))
            navigate("/")
        })
            .catch(() => {
                console.log('error');
            });
    }
    const handleAutocompleteChange = ((e, v) => {
        setRecord((prev) => (
            {
                ...prev,
                skills: [...v.map(obj => obj.title)]
            }
        ))
    });
    console.log(record);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="full_name"
                                value={record.full_name}
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                                id="full_name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={record.email}
                                id="email"
                                onChange={handleChange}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                value={record.password}
                                onChange={handleChange}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                style={{ marginTop: '15px' }}
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                filterSelectedOptions
                                onChange={handleAutocompleteChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Skills"
                                        placeholder="Favorites"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                onChange={handleChange}
                                fullWidth
                                name="university_name"
                                label="University Name"
                                id="university_name"
                            />
                        </Grid>
                    </Grid>

                    <Button
                        fullWidth
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}