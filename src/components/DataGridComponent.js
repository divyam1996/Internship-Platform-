import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { Tooltip } from '@material-ui/core';
import _ from 'lodash';
import { TableWrapper, useStyles } from './DataGridComponent.styled';
import DataGridToolbar from './Toolbar/DataGridToolbar';
import Popup from './Toolbar/Popup';
// import { dummyData } from '../pages/Mentor/data';

const DataGridComponent = ({ headerData, apiEndpoint, editRecord, addRecord,
    initialData, rowDetails, refreshDatagrid, dataParser, dummyData }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState(initialData);
    const [searchResult, setSearchResult] = useState([]);
    const showColumns = useRef([...headerData]);
    const sortParam = headerData.find((key) => key.sortable === true).field;
    const dataGridWindow = document.getElementsByClassName('MuiDataGrid-window')[0];
    const searchBar = document.getElementsByClassName('targetSearchBar')[0];

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                console.log('inside Datagrid')
                const res = await axios.get(apiEndpoint);
                const sortedData = res.data
                    .sort((a, b) => a[sortParam].toString().localeCompare(b[sortParam].toString(), undefined, {
                        numeric: true,
                        sensitivity: 'base'
                    }));
                const formattedData = [...sortedData];
                let parsedData = [];
                if (dataParser) {
                    parsedData = [...dataParser(formattedData)];
                } else {
                    parsedData = [...formattedData];
                }
                setData(parsedData);
                let temp = [...parsedData];
                if (!_.isEqual(searchData, initialData)) {
                    for (const [key, value] of Object.entries(searchData)) {
                        temp = [...temp?.filter(obj => obj[key]?.toString().toLowerCase().includes(value.toLowerCase()))];
                    }
                }
                setSearchResult(temp);
                setLoading(false);
            } catch (err) {
                setLoading(false);

            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiEndpoint, refreshDatagrid]);

    // useEffect(() => {
    //     if (dataGridWindow) {
    //         dataGridWindow.onscroll = () => {
    //             searchBar.scrollLeft = dataGridWindow.scrollLeft;
    //         };
    //     }
    // });

    const handleRowDoubleClick = (dataRow) => {
        dataRow.id && editRecord(dataRow);
    };

    const handleAddRecord = () => {
        addRecord();
    };

    const handleShowColumns = (params) => {
        const index = showColumns.current.findIndex(x => x.field === params.field);
        showColumns.current[index].hideInTable = !params.isVisible;
        searchData[params.field] && handleColumnsSearch('', params.field);
    };


    const handleColumnsSearch = _.debounce((val, name) => {
        const text = val.trim();
        setLoading(true);
        let temp = [...data];
        const searchObj = { ...searchData, [name]: text };
        setSearchData((prev) => ({ ...prev, [name]: text }));
        for (const [key, value] of Object.entries(searchObj)) {
            temp = [...temp?.filter(obj => obj[key]?.toString().toLowerCase().includes(value.toLowerCase()))];
        }
        setSearchResult(temp);
        setLoading(false);
    }, 400);

    const getHeaderData = () => {
        let columnsData = [];
        columnsData = showColumns.current?.map((key) => ({
            field: key.field,
            headerName: key.headerName,
            width: key.width,
            hide: key.hideInTable,
            sortable: !key.isDisabled,
            minWidth: key.width,
            sortComparator: (v1, v2) => v1?.toString().localeCompare(v2?.toString(), undefined, {
                numeric: true,
                sensitivity: 'base'
            }),
            renderCell: (params) => (
                key.dataType !== 'image'
                    ? (
                        <Tooltip title={params.value?.toString() ?? ''}>
                            <span className="table-cell-trucate">{params.value?.toString()}</span>
                        </Tooltip>
                    )
                    : (
                        <Popup email={params.value} />
                    )
            ),
        }));
        return columnsData;
    };

    const getRowData = () => {
        let rowData = [];
        rowData = searchResult?.map((value, index) => ({
            id: index + 1,
            ...value,
        }));
        return rowData;
    };

    return (
        <>
            <TableWrapper>
                <DataGrid
                    components={{ Toolbar: DataGridToolbar }}
                    rows={getRowData()}
                    columns={getHeaderData()}
                    onRowDoubleClick={handleRowDoubleClick}
                    onColumnVisibilityChange={handleShowColumns}
                    classes={{
                        columnHeader: classes.headerRow,
                    }}
                    componentsProps={{
                        toolbar: {
                            onAddClick: () => handleAddRecord(),
                            handleColumnSearch: (text, name) => handleColumnsSearch(text, name),
                            searchFields: showColumns.current,
                            tableLoading: loading
                        }
                    }}
                    rowsPerPageOptions={[100]}
                    disableSelectionOnClick
                    loading={loading}
                    disableColumnMenu
                    headerHeight={50}
                    rowHeight={40}
                    getRowClassName={(params) => params.row[rowDetails.columnName] === Number(rowDetails.rowNumber) ? 'highLight' : ''}
                />
            </TableWrapper>
        </>
    );
};

export default DataGridComponent;

DataGrid.propTypes = {
    addRecord: PropTypes.func,
    apiEndpoint: PropTypes.string,
    dataParser: PropTypes.func,
    editRecord: PropTypes.func,
    headerData: PropTypes.array,
    initialData: PropTypes.object,
    refreshDatagrid: PropTypes.bool,
    rowDetails: PropTypes.object
};
