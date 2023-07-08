export const candidateData = [
    // {
    //     field: 'CandidateId',
    //     headerName: 'Row ID',
    //     width: '80',
    //     hideInTable: false,
    //     isDisabled: false,
    //     sortable: true
    // },
    {
        field: 'full_name',
        headerName: 'Name',
        width: '100',
        hideInTable: false,
        isDisabled: false,
        sortable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: '200',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'skills',
        headerName: 'Skills',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        type: 'date'
    },
    {
        field: 'university_name',
        headerName: 'University Name',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        type: 'date'
    }
]

export const candidateInitialState = {
    full_name: '',
    email: '',
    skills: '',
    university_name: ''
};

export const candidateSearchState = {
    full_name: '',
    email: '',
    skills: '',
    university_name: ''
};

export const dummyDataCandidates = [
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

export const projectsData = [
    {
        field: 'project_id',
        headerName: 'Project ID',
        width: '300',
        hideInTable: false,
        isDisabled: false,
        sortable: true
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
        field: 'project_duration',
        headerName: 'Project Duration',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        type: 'date'
    },
    {
        field: 'skills',
        headerName: 'Skills',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        type: 'date'
    },
    {
        field: 'location',
        headerName: 'Loaction',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        type: 'date'
    }
]

export const projectsInitialState = {
    project_id: '',
    project_title: '',
    project_duration: '',
    skills: '',
    location: ''
};

export const projectsSearchState = {
    project_id: '',
    project_title: '',
    project_duration: '',
    skills: '',
    location: ''
};

export const dummyDataProjects = [

    {

        "project_id": "d843b905-e9d5-488d-9eaf-4ab41a428320",

        "project_title": "Hello Project",

        "project_description": "Hl Des",

        "project_duration": 20,

        "mentor_id": "b34cdeec-4cac-41e0-adae-2db11681a241",

        "skills": [

            "Cloud",

            "MERN",

            "MEAN"

        ],

        "location": "Pune"

    },

    {

        "project_id": "144b85d3-5c97-4242-807c-9d3011dfea81",

        "project_title": "Hello Project",

        "project_description": "Hl Des",

        "project_duration": 20,

        "mentor_id": "b34cdeec-4cac-41e0-adae-2db11681a241",

        "skills": [

            "Cloud",

            "MERN",

            "MEAN"

        ],

        "location": "Pune"

    }

]