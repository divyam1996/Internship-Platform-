import React, { useState } from 'react';
import {
    empDummy,
    mentorData, employeeInitialState,
    mentorSearchState,
} from './data';
import DataGridComponent from '../../components/DataGridComponent';
import { Header } from './Header';
// import ProForm from './ProForm';

export const Mentors = () => {
    const apiEndpoints = { read: `${process.env.REACT_APP_API_URL}/admin/operations/mentors/mentors` };
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
                headerData={mentorData}
                apiEndpoint={apiEndpoints.read}
                editRecord={handleEditRecord}
                addRecord={handleAddRecord}
                initialData={mentorSearchState}
                rowDetails={rowDetails}
                refreshDatagrid={refreshDatagrid}
                dummyData={empDummy}
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

