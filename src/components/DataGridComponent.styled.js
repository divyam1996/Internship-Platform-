import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const AdminHeaderWrapper = styled.div`
    height: 45px;
    overflow: scroll;
    width: 100%;
`;

export const AdminTitle = styled.div`
margin-top: 1rem;
font-size: 16px;
font-weight: 500;
color: #498205;
text-align: left;
padding-left: 10px;
margin-bottom: 1rem
`;

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    headerRow: {
        display: 'flex',
        alignItems: 'center',
        height: '30',
        backgroundColor: '#498245',
        color: 'white',
        fontSize: '12px'
    }
}));

export const TableWrapper = styled.div`
.MuiDataGrid-sortIcon {
    color: #ffffff;
    opacity: 1;
}
.MuiIconButton-sizeSmall {
    color:white;
}
.MuiTablePagination-caption {
    font-size: 11px;
    font-weight: 500;
    color: #498245;
}
.MuiTablePagination-actions {
    margin-left: 5px;
    color: #498245;
}
.MuiDataGrid-root {
    overflow-y:hidden;
}
.MuiDataGrid-root .MuiDataGrid-footerContainer {
    min-height: 25px;
    height: 27.25px;
    justify-content: flex-start;
    overflow: hidden;
}
.MuiTablePagination-toolbar {
    min-height: 25px;
    height: 27.25px;
    overflow: hidden;
    padding-left: 12px;
}
.MuiDataGrid-root .MuiDataGrid-cell {
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    
  } 
.MuiDataGrid-root .MuiDataGrid-cell:focus-within {
    outline: none !important;
}
.table-cell-trucate {
    overflow: hidden;
    text-overflow: ellipsis;
}
.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within {
    outline: none !important;
}

.MuiDataGrid-root .MuiDataGrid-columnHeaderWrapper {
    background-color: #498245;
}

.MuiDataGrid-root .MuiDataGrid-columnHeaderWrapper .MuiDataGrid-cell {
    background-color: #498245;
}

.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer {
    padding: 0 0 0 0;
}

.MuiDataGrid-columnsContainer {
    background-color: #498245;
}

.highLight {
    background-color: lightGrey;
} 

    height: 500px;
    overflow: auto;
    width: auto;
    justify-content: center;
`;
