import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: 'white',
        padding: '1px',
        color: '#498205',
        fontSize: '10px',
        fontWeight: '600'
    },
    columnsButton: {
        color: '#498205',
        fontSize: '11px',
        marginRight: '5px',
    },
    div: {
        display: 'flex',
        alignItems: 'center',
    }
}));
