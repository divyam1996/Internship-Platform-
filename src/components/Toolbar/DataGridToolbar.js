import React from 'react';
import { GridToolbarColumnsButton } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import './style.css';
import { useStyles } from './DataGridToolbar.styled';

const DataGridToolbar = ({ onAddClick, tableLoading, handleColumnSearch, searchFields }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.div}>
                <GridToolbarColumnsButton className={classes.columnsButton} />
                <Button
                    disabled={tableLoading}
                    onClick={onAddClick}
                    className={classes.button}
                    startIcon={<AddIcon />}
                >
                    Add
                </Button>
            </div>
            {/* <div>
                <SearchBar
                    handleColumnSearch={handleColumnSearch}
                    searchFields={searchFields}
                    loading={tableLoading}
                />
            </div> */}
        </>

    );
};

export default DataGridToolbar;

DataGridToolbar.propTypes = {
    handleColumnSearch: PropTypes.func,
    onAddClick: PropTypes.func,
    searchFields: PropTypes.array,
    tableLoading: PropTypes.bool
};
