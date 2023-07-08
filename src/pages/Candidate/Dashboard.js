import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export const Dashboard = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const user_id = userInfo?.user?.unique_id;
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [rowData, setRowData] = useState({})
    const bull = <span className={classes.bullet}>•</span>;
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/user/operations/candidates/myProjectListing/${user_id}`).then((res) => {
            setData(res.data)
        })
            .catch(() => {

            })
    }, [])
    const [showModal, setShowModal] = useState(false);

    const handleEditRecord = (result) => {
        console.log(result);
        setRowData({ ...result });
        setShowModal(true);

    };
    const handleModalClose = () => {
        setShowModal(false);
    };

    console.log(data);
    return (
        <>
            <br />
            <br />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 10px' }}>
                {
                    data.map(result => {
                        return (<div>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h5" >
                                        {result.project_title}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Duration: {result.project_duration}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Skills: {result.skills}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Location: {result.location}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => handleEditRecord(result)}>Apply</Button>
                                </CardActions>
                            </Card>
                        </div>)
                    })
                }
                {/* <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Project Name
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card> */}
            </div>
            {showModal
                && (
                    <ProjectForm
                        isOpen={showModal}
                        onClose={handleModalClose}
                        rowData={rowData}
                    />
                )}
        </>
    );
};