import React, { useState } from 'react';
import {
    candidateData, candidateInitialState,
    candidateSearchState, dummyDataCandidates
} from '../data';
import DataGridComponent from '../../../components/DataGridComponent';
import { Header } from '../Header';

const addTitle = 'Add New Record';
const editTitle = 'Edit Record';

export const Candidates = () => {
    const apiEndpoints = { read: `${process.env.REACT_APP_API_URL}/user/operations/mentors/allCandidates` };
    const [showModal, setShowModal] = useState(false);
    const [editRowData, setEditRowData] = useState(candidateInitialState);
    const [modalTitle, setModalTitle] = useState(addTitle);
    const [refreshDatagrid, setRefreshDatagrid] = useState(false);
    const [rowDetails, setRowDetails] = useState({
        columnName: 'RoleId',
        rowNumber: ''
    });
    const handleEditRecord = (obj) => {
        const rowData = obj.row;
        setModalTitle(editTitle);
        setShowModal(true);
        setEditRowData((prev) => ({
            ...prev,
            ...rowData
        }));
    };
    const handleAddRecord = () => {
        setEditRowData(candidateInitialState);
        setModalTitle(addTitle);
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
                headerData={candidateData}
                apiEndpoint={apiEndpoints.read}
                editRecord={handleEditRecord}
                addRecord={handleAddRecord}
                initialData={candidateSearchState}
                rowDetails={rowDetails}
                refreshDatagrid={refreshDatagrid}
                dummyData={dummyDataCandidates}
            />

            {/* {showModal
                && (
                    <RolesForm
                        isOpen={showModal}
                        onClose={handleModalClose}
                        title={modalTitle}
                        rowData={editRowData}
                        onRecordSubmit={handleRecordSubmit}
                    />
                )} */}
        </>
    );
};

