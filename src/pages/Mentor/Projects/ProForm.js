import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useStyles } from '../../Candidate/ProjectForm.styled';

const ProForm = ({ isOpen, onClose, rowData, onRecordSubmit }) => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const user_id = userInfo?.user?.unique_id;
    const classes = useStyles();
    // const [createRowData, setCreateRowData] = useState(rowData);
    const [record, setRecord] = useState({
        "project_title": '',
        "project_description": '',
        "skills": [],
        "project_duration": '',
        "location": '',
        "mentor_id": user_id
    })
    console.log(rowData);
    const handleSubmit = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/user/operations/mentors/createProject`, {
            ...record,
            project_duration: +record.project_duration
        }).then((res) => {
            onRecordSubmit(res.data.project_id);
            onClose();
        });
    }
    const submitButtonVisible = true;
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

    const cancelButtonHandler = () => {
        onClose();
    };
    // const submitButtonVisible = !_.isEqual(rowData, createRowData) && nameError === '' && createRowData.RoleName;

    const handleChange = ((e) => setRecord((prev) => (
        {
            ...prev,
            [e.target.name]: e.target.value
        }
    )));

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
        <Dialog
            open={isOpen}
            scroll="paper"
            maxWidth="lg"
        >
            <DialogTitle id="scroll-dialog-title" classes={{ root: classes.headerRoot }} className={classes.header}>Apply for this Project</DialogTitle>
            {/* {cancelAlert && (
                <AlertDialog
                    dialogMessage="You will lose any unsaved changes. Do you want to Continue?"
                    dialogOpenState={cancelAlert}
                    // handleClose={() => handleUnsaveChanges()}
                    handleAlertFunction={onClose}
                />
            )} */}
            <DialogContent>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 10px' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="project_title"
                        label="Project Title"
                        value={record.project_title}
                        name="project_title"
                        // autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="project_description"
                        label="Project Description"
                        value={record.project_description}
                        name="project_description"
                        // autoComplete="email"
                        onChange={handleChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type='number'
                        id="project_duration"
                        label="Project Duration"
                        value={record.project_duration}
                        name="project_duration"
                        // autoComplete="email"
                        onChange={handleChange}
                        autoFocus
                    />
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        // value={email}
                        name="location"
                        value={record.location}
                        // autoComplete="email"
                        onChange={handleChange}
                        autoFocus
                    />
                    {/* // onChange={(e) => setEmail(e.target.value)} */}
                    {/* /> */}
                    {/* <DropdownInput
                        name="Status"
                        title="Status"
                        value={createRowData.Status}
                        options={['Active', 'Inactive']}
                        handleInputChange={handleInputChange}
                        required
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0 10px' }}>
                    <TextInput
                        name="CreatedBy"
                        title="Created By"
                        value={createRowData?.RoleId ? createRowData.CreatedBy : userName?.name}
                        disabled
                        handleInputChange={handleInputChange}
                    />
                    <TextInput
                        name="CreatedDate"
                        title="Created Date"
                        value={createRowData?.RoleId ? formatDate(new Date(createRowData.CreatedDate)) : formatDate(new Date())}
                        disabled
                        handleInputChange={handleInputChange}
                    />
                    <TextInput
                        name="ModifiedBy"
                        title="Last Modified By"
                        value={createRowData.ModifiedBy || userName?.name}
                        disabled
                        handleInputChange={handleInputChange}
                    />
                    <TextInput
                        name="LastModifiedDate"
                        title="Last Modified Date"
                        value={createRowData?.RoleId ? formatDate(new Date(createRowData.LastModifiedDate)) : formatDate(new Date())}
                        disabled
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div style={{ display: 'grid', marginTop: '12px' }}>
                    <TextInput
                        name="Comments"
                        title="Comments"
                        value={createRowData.Comments}
                        handleInputChange={handleInputChange}
                        isMultiline
                        width="1080px"
                    /> */}
                </div>
            </DialogContent>
            <DialogActions style={{ marginRight: '15px', paddingBottom: '18px', paddingTop: '15px' }}>
                <div style={{ display: 'flex', gap: '0 8px' }}>
                    {submitButtonVisible
                        && (
                            <Button
                                classes={{ root: classes.button }}
                                onClick={handleSubmit}
                                variant="outlined"
                            >
                                Submit
                            </Button>
                        )}
                    <Button
                        classes={{ root: classes.button }}
                        onClick={cancelButtonHandler}
                        variant="outlined"
                    >
                        Close
                    </Button>
                </div>
            </DialogActions>
        </Dialog>

    );
};

export default ProForm;

// RolesForm.propTypes = {
//     isOpen: PropTypes.bool,
//     onClose: PropTypes.func,
//     onRecordSubmit: PropTypes.func,
//     rowData: PropTypes.object,
//     title: PropTypes.string
// };
