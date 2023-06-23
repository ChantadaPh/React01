const columns = {
    FORM: [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            sorter: (a: { name: string }, b: { name: string }) => a.name.length - b.name.length,
        },
        {
            title: 'Sex',
            dataIndex: 'sex',
            key: 'sex',
            width: 300,
            sorter: (a: { name: string }, b: { name: string }) => a.name.length - b.name.length,
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
            width: 300,
            sorter: (a: { name: string }, b: { name: string }) => a.name.length - b.name.length,
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality',
            width: 300,
            sorter: (a: { name: string }, b: { name: string }) => a.name.length - b.name.length,
        },
        {
            title: 'Manage',
            dataIndex: 'manage',
            key: 'manage',
            width: 300,
            sorter: (a: { name: string }, b: { name: string }) => a.name.length - b.name.length
        }
    ]
}

export default columns