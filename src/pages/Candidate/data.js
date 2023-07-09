export const applicationData = [

    {
        field: 'application_id',
        headerName: 'Application ID',
        width: '350',
        hideInTable: false,
        isDisabled: false,
        sortable: true,
    },
    {
        field: 'project_title',
        headerName: 'Project Title',
        width: '200',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'project_description',
        headerName: 'Project Description',
        width: '200',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'skills',
        headerName: 'Skills',
        width: '150',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: '100',
        hideInTable: false,
        isDisabled: false,
    }
]

export const applicationInitialState = {
    application_id: '',
    project_title: '',
    project_description: '',
    skills: '',
    status: ''
};

export const applicationSearchState = {
    application_id: '',
    project_title: '',
    project_description: '',
    skills: '',
    status: ''
};