import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles(() => ({
    select: {
        paddingTop: '0',
        paddingBottom: 0,
        fontSize: '11px',
        height: '19px',
        margin: '0'
    },
    button: {
        backgroundColor: '#8626C3',
        padding: '3px',
        color: 'white',
        fontSize: '11px',
        '&:hover': {
            backgroundColor: '#8626C3'
        }
    },
    menuRoot: {
        fontSize: '11px',
    },
    header: {
        backgroundColor: '#8626C3',
        color: 'white',
        paddingTop: '8px',
        paddingBottom: '8px',
        marginBottom: '8px'
    },
    headerRoot: {
        fontSize: '12px'
    },
    inputLabel: {
        fontSize: '11px',
        color: 'black',
        paddingLeft: '16px',
        fontWeight: '300'
    }
}));

export const ButtonWrapper = styled.div`
    margin-right: 10px;
`;
