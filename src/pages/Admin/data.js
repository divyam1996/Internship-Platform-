export const employeeData = [
    {
        field: 'employee_id',
        headerName: 'Employee Id',
        width: '150',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'full_name',
        headerName: 'Name',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        sortable: true,
    },

    {
        field: 'employee_email',
        headerName: 'Email',
        width: '300',
        hideInTable: false,
        isDisabled: false,
    },
    {
        field: 'button',
        headerName: 'Approve',
        width: '150',
        hideInTable: false,
        isDisabled: true,
        dataType: 'image'
    },
]
export const employeeInitialState = {
    full_name: '',
    employee_email: '',
    employee_id: '',
};

export const employeeSearchState = {
    full_name: '',
    employee_email: '',
    employee_id: '',
};

export const dummyData = [

    {

        "unique_id": "6f4eccb2-881a-4c29-a5bc-22ac658ef33d",

        "employee_id": "6204468",

        "employee_email": "Nickolas12@infosys.com",

        "full_name": "Beulah Adams"

    },

    {

        "unique_id": "8175ae8f-9670-4c2f-a021-f2afc0b9b667",

        "employee_id": "7672003",

        "employee_email": "Nicklaus_Turcotte@infosys.com",

        "full_name": "Dr. Dewey Harris"

    },

    {

        "unique_id": "ae3d54b4-9298-49bc-bb81-6f7b0a19415a",

        "employee_id": "0771261",

        "employee_email": "Domenick35@infosys.com",

        "full_name": "Wendy Feil"

    },

    {

        "unique_id": "448b9479-035a-4fdb-be79-cd6f966ee0c7",

        "employee_id": "7707820",

        "employee_email": "Nicklaus.Kub82@infosys.com",

        "full_name": "Boyd Kub"

    },

    {

        "unique_id": "4169d57e-686c-4874-b47c-8c265e781ce3",

        "employee_id": "8030286",

        "employee_email": "Nicklaus64@infosys.com",

        "full_name": "Donald Ledner"

    }

]

export const mentorData = [
    {
        field: 'full_name',
        headerName: 'Name',
        width: '200',
        hideInTable: false,
        isDisabled: false,
        sortable: true,
    },

    {
        field: 'email',
        headerName: 'Email',
        width: '300',
        hideInTable: false,
        isDisabled: false,
    },
]
export const mentorInitialState = {
    full_name: '',
    email: ''
};

export const mentorSearchState = {
    full_name: '',
    email: '',
};

export const empDummy = [

    {

        "full_name": "Aaron Collier",

        "email": "Zoey_Shields13@infosys.com"

    },

    {

        "full_name": "Ada Corwin",

        "email": "Jay57@infosys.com"

    }

]