import React, { useState } from 'react';
import {
    dummyDataProjects,
    projectsData, projectsInitialState,
    projectsSearchState,
} from '../data';
import DataGridComponent from '../../../components/DataGridComponent';
import { Header } from '../Header';
import ProForm from './ProForm';

export const Projects = () => {
    const apiEndpoints = { read: `${process.env.REACT_APP_API_URL}/user/operations/mentors/allprojects` };
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
                headerData={projectsData}
                apiEndpoint={apiEndpoints.read}
                editRecord={handleEditRecord}
                addRecord={handleAddRecord}
                initialData={projectsSearchState}
                rowDetails={rowDetails}
                refreshDatagrid={refreshDatagrid}
                dummyData={dummyDataProjects}
            />

            {showModal
                && (
                    <ProForm
                        isOpen={showModal}
                        onClose={handleModalClose}
                        rowData={rowData}
                        onRecordSubmit={handleRecordSubmit}
                    />
                )}
        </>
    );
};

