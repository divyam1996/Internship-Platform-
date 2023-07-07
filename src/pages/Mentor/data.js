export const candidateData = [
    {
        field: 'CandidateId',
        headerName: 'Row ID',
        width: '80',
        hideInTable: false,
        isDisabled: false,
        sortable: true
    },
    {
        field: 'Name',
        headerName: 'Name',
        width: '100',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'Email',
        headerName: 'Created By',
        width: '110',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'Skills',
        headerName: 'Created Date',
        width: '140',
        hideInTable: false,
        isDisabled: false,
        type: 'date'
    }
]

export const candidateInitialState = {
    CandidateId: '',
    Name: '',
    Email: '',
    Skills: ''
};

export const candidateSearchState = {
    CandidateId: '',
    Name: '',
    Email: '',
    Skills: ''
};

export const dummyData = [
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
    }]