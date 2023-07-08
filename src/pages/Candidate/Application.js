import React, { useState } from 'react';
import {
    applicationData, applicationInitialState,
    applicationSearchState
} from './data';
import DataGridComponent from '../../components/DataGridComponent';
import { Header } from './Header';
import { dummyDataCandidates } from '../Mentor/data';
import { useSelector } from 'react-redux';

const addTitle = 'Add New Record';
const editTitle = 'Edit Record';

export const Application = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const user_id = userInfo?.user?.unique_id;
    const apiEndpoints = { read: `${process.env.REACT_APP_API_URL}/user/operations/candidates/getSubmittedApplications/${user_id}` };
    const [showModal, setShowModal] = useState(false);
    const [editRowData, setEditRowData] = useState(applicationInitialState);
    const [modalTitle, setModalTitle] = useState(addTitle);
    const [refreshDatagrid, setRefreshDatagrid] = useState(false);
    const [rowDetails, setRowDetails] = useState({
        columnName: 'RoleId',
        rowNumber: ''
    });
    const dummyDataCandidates = [
        {
            CandidateId: '2',
            Name: 'Udit',
            Email: 'xxy',
            Skills: ''
        },
        {
            CandidateId: '2',
            Name: 'Udit',
            Email: 'xxy',
            Skills: ''
        },
        {
            CandidateId: '2',
            Name: 'Udit',
            Email: 'xxy',
            Skills: ''
        }
    ]

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
        setEditRowData(applicationInitialState);
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
                headerData={applicationData}
                apiEndpoint={apiEndpoints.read}
                editRecord={handleEditRecord}
                addRecord={handleAddRecord}
                initialData={applicationSearchState}
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

