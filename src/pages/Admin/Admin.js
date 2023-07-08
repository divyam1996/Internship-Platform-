import React, { useState } from 'react';
import {
    dummyData,
    employeeData, employeeInitialState,
    employeeSearchState,
} from './data';
import DataGridComponent from '../../components/DataGridComponent';
import { Header } from './Header';
// import ProForm from './ProForm';

export const Admin = () => {
    const apiEndpoints = { read: `${process.env.REACT_APP_API_URL}/admin/operations/allEmployees` };
    const [showModal, setShowModal] = useState(false);
    const [refreshDatagrid, setRefreshDatagrid] = useState(false);
    const [rowDetails, setRowDetails] = useState({
        columnName: 'project_id',
        rowNumber: ''
    });
    const handleEditRecord = (obj) => {
        // setShowModal(true);
    };
    const [rowData, setRowData] = useState({})
    const handleAddRecord = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleRecordSubmit = (newId) => {
        setRefreshDatagrid(prev => !prev);
        setRowDetails(prev => ({ ...prev, rowNumber: newId }));
    };
    return (
        <>
            <Header />
            <DataGridComponent
                headerData={employeeData}
                apiEndpoint={apiEndpoints.read}
                editRecord={handleEditRecord}
                addRecord={handleAddRecord}
                initialData={employeeSearchState}
                rowDetails={rowDetails}
                refreshDatagrid={refreshDatagrid}
                dummyData={dummyData}
            />

            {/* {showModal
                && (
                    <ProForm
                        isOpen={showModal}
                        onClose={handleModalClose}
                        rowData={rowData}
                        onRecordSubmit={handleRecordSubmit}
                    />
                )} */}
        </>
    );
};

