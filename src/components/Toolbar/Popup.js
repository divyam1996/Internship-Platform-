import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Popup = ({ email }) => {
    const [showImage, setShowImage] = useState(false);
    const submitButtonVisible = true;
    console.log(email);
    const handleButtonClick = () => {
        setShowImage(true);
    };

    const handleOnClose = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/admin/operations/approveAsMentor`, { email })
            .then(() => {
                setShowImage(false);
                window.location.reload()
            })
    };

    return (
        <>
            <Button
                variant="text"
                size="small"
                style={{ textTransform: 'capitalize', fontSize: '11px', color: 'blue' }}
                onClick={handleButtonClick}
            >
                Add as Mentor
            </Button>
            {showImage
                && (
                    <Dialog
                        open
                        scroll="paper"
                        maxWidth="lg"
                    >
                        <DialogContent>
                            Added as a Mentor
                        </DialogContent>
                        <DialogActions style={{ marginRight: '15px', paddingBottom: '18px', paddingTop: '15px' }}>

                            <Button
                                size=''
                                onClick={handleOnClose}
                                variant="outlined"
                            >
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
        </>

    );
};
export default Popup;

